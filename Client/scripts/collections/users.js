define([
	'underscore',
	'backbone',
	'models/users',
], function (_, Backbone, UsersModel) {
	var UsersCollections = Backbone.Collection.extend({
		// model : UsersModel
        url: '/users'
	});

	return UsersCollections;
});