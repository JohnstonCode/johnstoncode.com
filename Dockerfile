FROM php:7-fpm-alpine as base

FROM base as dev

COPY --from=composer /usr/bin/composer /usr/bin/composer
