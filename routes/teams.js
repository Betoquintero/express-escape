const router = require("express").Router();
const Team = require ("../models/Team")
const User = require ("../models/User")


// all your routes here

router.get('/', async (req, res, next) => {
    const teams = await Team.find({});
    try {
        res.render('teams/teams', {teams})
    } catch (error) {
        next(error)
    }
});


router.get('/create', async (req, res, next) => {
    try {
        const participants = await User.find({})
        res.render('teams/new-team', {participants})
    } catch (error) {
        next(error)
    }
});

router.post('/create', async (req, res, next) => {
    const {name, participants} = req.body;
        try {
        await Team.create ({name, participants})
        //res.json({teams})
        res.redirect("/teams");
    } catch (error) {      
        next(error)
    }
});

router.get("/:teamId", async (req, res, next)=> {
    const {teamId} = req.params;
    try {
        const teams = await Team.findById(teamId).populate('participants')
        res.render('teams/teams-details', {teams})
    } catch (error) {
        next(error)        
    }
});

router.get('/:teamId/edit', async (req, res, next) => {
    const {teamId} = req.params
    try {
        const teams = await Team.findById(teamId).populate("participants")
        const participants = await User.find({})
        res.render("teams/edit-team", {teams, participants})
    } catch (error) {
        next(error)
    }
})

router.post('/:teamId/edit', async (req, res, next) => {
    const {teamId} = req.params;
    const {name, participants} = req.body;
    try {        
        await Team.findByIdAndUpdate(teamId, {name, participants}, {new:true})
        res.redirect(`/teams/${teamId}`)
    } catch (error) {
        next(error)
    }
})

router.post('/delete/:teamId', async (req, res, next ) => {
    const {teamId} = req.params;
    try {
        await Team.findByIdAndDelete(teamId)
        res.redirect('/teams')
    } catch (error) {
        next(error)        
    }
});



router.post('/delete/:movieid', async (req, res, next ) => {
    const {movieid} = req.params;
    try {
        await Movie.findByIdAndDelete(movieid)
        res.redirect('/movies')
    } catch (error) {
        next(error)        
    }
});



module.exports = router;