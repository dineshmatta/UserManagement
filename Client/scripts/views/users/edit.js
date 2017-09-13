define([
	'jquery',
	'underscore',
	'backbone',

	'models/users', 
	'text!templates/users/edit.html',
], function ($, _, Backbone, UsersModel, userEditTemplate) {
	var UserEditView = Backbone.View.extend({
		el: $('.page'),
		template: _.template(userEditTemplate),
		render: function(options){
			if (options.id) {
				this.user = new UsersModel({ id : options.id });
				this.user.fetch({
					success: function (user) {
						this.$el.html(this.template({ user : user.toJSON() }));
					}.bind(this)
				});				
			} else {
				this.$el.html(this.template( { user : null } ));
			}
		},
		events: {
			'submit .editUserForm' : 'saveUser',
			'click .delete': 'deleteUser'
		},
		saveUser: function (ev) {
			var userDetails = $(ev.currentTarget).serializeObject();
			var user = new UsersModel();
			user.save(userDetails, {
				success: function (user) {
					Backbone.history.navigate('', {trigger: true});
				}
			});
			console.log('userDetails', userDetails);
			return false;
		},
		deleteUser: function (ev) {
			this.user.destroy({
				success: function (argument) {
					Backbone.history.navigate('', {trigger: true});
				}
			})
			return false;
		}
	});

	return UserEditView;
});