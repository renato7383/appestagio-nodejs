module.exports = function(app){

    var user = app.controllers.user;

    app.route('/user').get(user.index);
    app.route('/user/create').get(user.create);
}