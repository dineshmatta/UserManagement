var express = require('express'),
    router = express.Router();


var User = require('./../models/user');


router.use(function(req, res, next){
	console.log("Router Middleware");
	next();
});

router.get('/', function (req, res) {
	res.json({ message : 'Woila! API working' });
});


router.route('/users')
	.post(function(req, res){
		var user = new User();
		user.name = req.body.name;
		user.email = req.body.email;
		user.age = req.body.age;
		user.address = req.body.address;


		user.save(function(err){
			if (err) {
				res.send(err);
			}
			res.json({ message : 'User Created!'})
		});
	})
	
	.get(function(req, res){
		User.find(function(err, users){
			if (err) {
				res.send(err);
			}
			res.json(users)
		});
	});

router.route('/users/:_id')
	.get(function(req, res){
		User.findById(req.params._id, function(err, user){
			if (err) {
				res.send(err);
			}
			res.json(user);
		})
	})

	.put(function(req, res){
		User.findById(req.params._id, function(err, user){
			if (err) {
				res.send(err);
			}

			user.name = req.body.name;
			user.email = req.body.email;
			user.age = req.body.age;
			user.address = req.body.address;

			user.save(function(err){
				if (err) {
					res.send(err);
				}
				res.json({ message : 'User updated!' });
			})
		})
	})

	.delete(function(req, res){
		User.remove({
			_id: req.params._id
		}, function (err, user) {
			if (err) {
				res.send(err)
			}
			res.json({ message: 'User deleted successfully!' })
		})
	});


module.exports = router;