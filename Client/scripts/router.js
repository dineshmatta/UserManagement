define([
	'jquery',
	'underscore',
	'backbone',
	'views/users/list',
	'views/users/edit'
], function ($, _, Backbone, UserListView, UserEditView) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'home',
            'new': 'editUser',
            'edit/:id' : 'editUser',

			// default
			'*actions': 'defaultAction'
		}
	});

	var initialize = function () {
		var appRouter = new AppRouter();

		appRouter.on('route:home', function () {
			var userListView = new UserListView();
			userListView.render();
		});

		appRouter.on('route:editUser', function (id) {
			var userEditView = new UserEditView(id);
			userEditView.render({ id : id });
		});

		appRouter.on('route:defaultAction', function (actions) {
			console.log('No route: ', actions);
		});

		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});