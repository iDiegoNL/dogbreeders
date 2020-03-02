FROM php:7.3.11-fpm

ADD php-ini-overrides.ini :/etc/php/7.3/fpm/conf.d/99-overrides.ini

# node.. should be it's own container..
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get update -y && apt-get install --no-install-recommends -y \
    openssl \
    zip \
    unzip \
    git \
    vim \
    nano \
    nodejs \
    libzip-dev \
    # required for pg
    libpq-dev \
    ;

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN command -v composer
RUN composer self-update --preview

RUN docker-php-ext-install \
    pdo \
    mysqli \
    pdo_mysql \
    bcmath \
    pcntl \
    sockets \
    zip \
    ;

RUN pecl install redis && docker-php-ext-enable redis

RUN groupadd -g 1001 docker
RUN useradd -ms /bin/bash docker -u 1001 -g 1001
USER docker

WORKDIR /var/www
