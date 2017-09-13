define([
	'jquery',
	'underscore',
	'backbone',

	'collections/users',
	'text!templates/users/list.html'
], function ($, _, Backbone, UsersCollection, usersListTemplate) {
	var UsersListView = Backbone.View.extend({
		el: $('.page'),
		template : _.template(usersListTemplate),
		render: function(){
			this.collection = new UsersCollection();
			this.collection.fetch({
				success: function (data) {
					this.$el.html(this.template( { users : data.toJSON() } ));
				}.bind(this)
			});
		}
	});

	return UsersListView;
});