module.exports = function(app){

    
    var UserController = {
        index: function(req,res){
            res.render('user/index');
        },
        create: function(req,res){
            res.render('user/create');
        }
    }

    return UserController;
}