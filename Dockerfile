FROM ubuntu:latest

RUN apt-get update \
  && apt-get install -y curl
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
RUN mv ~/.deno/bin/deno /usr/local/bin/deno

COPY . /var/www

EXPOSE 3000

WORKDIR /var/www
CMD [ "deno", "run", "--allow-net", "./src/server.ts" ]