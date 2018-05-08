# Dockerfile
FROM phusion/baseimage
ENV DEBIAN_FRONTEND noninteractive

# Install PHP
RUN add-apt-repository -y ppa:ondrej/php && apt-get update
RUN apt-get install -y \
# Only install the php extensions you need.
php7.1-fpm \
php7.1-mcrypt \
php7.1-intl \
php7.1-mbstring \
php7.1-xml \
php7.1-dom \
php7.1-zip \
php7.1-curl

# Create socket directory
RUN mkdir -p /var/run/php

# Don't clear env variables
# This is very important since it will allow us to read environment variables from the container.
RUN sed -e 's/;clear_env = no/clear_env = no/' -i /etc/php/7.1/fpm/pool.d/www.conf

# Install nginx
RUN apt-get install -y nginx

COPY ./build/site.conf /etc/nginx/conf.d/default.conf

# Install supervisor
RUN apt-get install -y supervisor

ADD ./build/supervisor.conf /etc/supervisor/conf.d/my-app.conf

# Copy application files
COPY . /var/www/html

# Install and run composer
RUN apt-get install -y wget git zip
RUN cd /var/www/html && chmod +x ./build/composer.sh && ./build/composer.sh
RUN cd /var/www/html && php composer.phar install --no-scripts && rm composer.phar

# Allow php to write cache and logs. Note that the cache and data are outside the application directory because we don't want this data to be immutable.
# You can add the directories you want to store data to persist through deployments.
RUN mkdir -p /data/cache
RUN mkdir -p /data/logs
# Remember to allow php-fpm to write on those.
RUN chown -R www-data:www-data /data/cache
RUN chown -R www-data:www-data /data/logs
RUN chown -R www-data:www-data /var/www/html

WORKDIR /var/www/html

# Run supervisor
CMD ["supervisord", "-n"]
