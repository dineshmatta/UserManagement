
require.config({
	paths: {
		jquery: 'libs/jquery.min',
		underscore: 'libs/underscore-min',
		backbone: 'libs/backbone-min',
		templates: '../templates'
	}
});

require([
	'app'
], function (App) {

    $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
	
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
        options.url = 'http://localhost:8989/api' + options.url;
    });


	App.initialize();
});