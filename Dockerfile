FROM php:8.2-apache
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpng-dev libjpeg-dev libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd mysqli pdo pdo_mysql \
    && a2enmod rewrite \
    && rm -rf /var/lib/apt/lists/*
COPY . /var/www/html
WORKDIR /var/www/html
# Use production php.ini if needed
# COPY ./php.ini-production $PHP_INI_DIR/php.ini
