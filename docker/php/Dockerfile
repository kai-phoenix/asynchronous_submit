FROM php:8.2-apache

# ファイルのコピー
COPY ./docker/php/php.ini /etc/opt/remi/php82/php.ini
COPY ./docker/apache/vhost.conf /etc/httpd/conf.d/vhost.conf
COPY ./docker/apache/rewrite.conf /etc/httpd/conf.modules.d/rewrite.conf

WORKDIR /var/www/html/