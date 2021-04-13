const router = require('express').Router();
const bodyParser = require('body-parser');
const Student = require('./DB/student');
const Teacher = require('./DB/teacher');



//route to post user details to db
router.post('/student', function(req, res) {
    console.log(req.body);
    const s_user = new Student({
        email: req.body.email,
        name: req.body.name,
        contact: req.body.contact,
        password: req.body.password,
        class: req.body.class,
        address: req.body.address
    });
    s_user.save();
    res.render('signin');
});

router.post('/teacher', function(req, res) {
    const t_user = new Teacher({
        email: req.body.email,
        name: req.body.name,
        contact: req.body.contact,
        password: req.body.password,
        idType: req.body.idType,
        id: req.body.id,
        qualification: req.body.qualification
    });
    t_user.save();
    res.render('signin');
});

router.get('/', function(req, res) {
    res.render('home_page');
});

router.get('/home', function(req, res) {
    res.render('home');
});

router.get('/about', function(req, res) {
    res.render('about');
});

router.get('/contact', function(req, res) {
    res.render('contact');
});

router.get('/faq', function(req, res) {
    res.render('faq');
});

router.get('/image', function(req, res) {
    res.render('image');
});

router.get('/privacy', function(req, res) {
    res.render('privacy');
});

router.get('/signin', function(req, res) {
    res.render('signin');
});

router.get('/signup', function(req, res) {
    res.render('signup');
});

router.get('/team', function(req, res) {
    res.render('team');
});

router.get('/terms', function(req, res) {
    res.render('terms');
});

router.post('/account', function(req, res) {
    if (req.body.role == 'teacher'){
        Teacher.find({email : req.body.email, password : req.body.password}, (err, tdata)=>{
            if (!err){
                res.render('teacher', {t_d : tdata[0]});
            }
        });
    } else if (req.body.role == 'student') {
        Teacher.find({email : req.body.email, password : req.body.password}, (err, sdata)=>{
            if (!err){
                res.render('teacher', {s_d : sdata[0]});
            }
        });
    }
});


module.exports = router;