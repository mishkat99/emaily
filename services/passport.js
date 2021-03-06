const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
})

// passport.use(new GoogleStrategy({
// 	clientID: keys.googleClientID,
// 	clientSecret: keys.googleClientSecret,
// 	callbackURL: '/auth/google/callback',
// 	proxy: true
// }, (accessToken, refreshToken, json, done) => {
// 	User.findOne({
// 		googleID: json.id
// 	}).then((existingUser) => {
// 		if (existingUser) {
// 			// we already have this user
// 			done(null, existingUser);
// 		} else {
// 			new User({
// 				googleID: json.id 
// 			})
// 			.save()
// 			.then(resolved => done(null, resolved));
// 		}
// 	});
// }));

passport.use(new GoogleStrategy({
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: '/auth/google/callback',
	proxy: true
}, async (accessToken, refreshToken, json, done) => {
	const existingUser = await User.findOne({ googleID: json.id});
	if (existingUser) {
		// we already have this user
		return done(null, existingUser);
	}

	const resolved = await new User({ googleID: json.id }).save();
	done(null, resolved);
}));