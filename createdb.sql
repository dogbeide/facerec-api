create table if not exists users (
	id serial,
	name varchar(100) not null,
	email text unique not null,
	entries int8 default 0,
	createdat timestamp not null
);

create table if not exists login (
	id serial,
	email text unique not null,
	hash varchar(100) not null,
	primary key (id),
	foreign key (email) references users(email) on delete cascade on update cascade
);