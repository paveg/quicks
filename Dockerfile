FROM ruby:2.6.5
ENV LANG C.UTF-8

RUN apt-get update -qq && \
    apt-get install -y lsb-release && \
    apt-get remove -y libmariadb-dev-compat libmariadb-dev

RUN wget https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-common_8.0.19-1debian10_amd64.deb \
    https://dev.mysql.com/get/Downloads/MySQL-8.0/libmysqlclient21_8.0.19-1debian10_amd64.deb \
    https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-community-client-core_8.0.19-1debian10_amd64.deb \
    https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-community-client_8.0.19-1debian10_amd64.deb \
    https://dev.mysql.com/get/Downloads/MySQL-8.0/libmysqlclient-dev_8.0.19-1debian10_amd64.deb

RUN dpkg -i mysql-common_8.0.19-1debian10_amd64.deb \
    libmysqlclient21_8.0.19-1debian10_amd64.deb \
    mysql-community-client-core_8.0.19-1debian10_amd64.deb \
    mysql-community-client_8.0.19-1debian10_amd64.deb \
    libmysqlclient-dev_8.0.19-1debian10_amd64.deb

RUN gem install bundler

WORKDIR /tmp
ADD Gemfile Gemfile
ADD Gemfile.lock Gemfile.lock
RUN bundle install

WORKDIR /usr/src/app/
COPY . /usr/src/app/
