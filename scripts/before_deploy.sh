#!/bin/bash

# kill running proccesses
array=( rethinkdb horizon node )
for proc in "${array[@]}"
do
	sudo pkill $proc
done

# install database and dependencies
if [ ! -f ./.dependenciesInstalled ]; then
	# fetch source foundries
	sudo wget https://download.rethinkdb.com/centos/6/`uname -m`/rethinkdb.repo \
						-O /etc/yum.repos.d/rethinkdb.repo
	sudo wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo
	sudo curl -sL https://rpm.nodesource.com/setup_8.x | sudo bash -

	# install system dependencies
	sudo yum install -y rethinkdb centos-release-scl screen \
								 			devtoolset-3 python27 nodejs yarn git

	# set yarn globals and install server
	export PATH="$(yarn global bin):$PATH"
	sudo yarn global add horizon

	# set flag after successful installation
	touch ./.dependenciesInstalled
fi
exit;
