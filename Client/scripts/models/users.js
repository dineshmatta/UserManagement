define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	var UsersModel = Backbone.Model.extend({
    	urlRoot: '/users',
	});

	return UsersModel;	
})