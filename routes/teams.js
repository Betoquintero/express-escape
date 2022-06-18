const router = require("express").Router();
const Team = require ("../models/Team")
const User = require ("../models/User")


// all your routes here

router.get ('/', async (req, res, next) => {
    const teams = await Team.find({});
    try {
        res.render('teams/teams', {teams})
    } catch (error) {
        next(error)
    }
});


router.get ('/create', async (req, res, next) => {
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
        res.redirect("teams/teams");
    } catch (error) {      
        next(error)
    }
});

router.get("/:teamId", async (req, res, next)=> {
    const {teamId} = req.params;
    try {
        const teams = await Team.findById(teamId).populate('participants')
        res.render('teams/team-details', {teams})
    } catch (error) {
        next(error)        
    }
});

// router.get("/:movieid", async (req, res, next)=> {
//     const {movieid} = req.params;
//     try {
//         const movie = await Movie.findById(movieid).populate('cast')
//         res.render('movies/movie-details', {movie})
//     } catch (error) {
//         next(error)        
//     }
// });

// router.post('/delete/:movieid', async (req, res, next ) => {
//     const {movieid} = req.params;
//     try {
//         await Movie.findByIdAndDelete(movieid)
//         res.redirect('/movies')
//     } catch (error) {
//         next(error)        
//     }
// });

// router.get('/:movieid/edit', async (req, res, next) => {
//     const {movieid} = req.params
//     try {
//         const movie = await Movie.findById(movieid).populate("cast")
//         const celebrities = await Celebrity.find({})
//         res.render("movies/edit-movie", {movie, celebrities})
//     } catch (error) {
//         next(error)
//     }
// })

// router.post(':/movieid/edit', async (req, res, next) => {
//     const {movieid} = req.params;
//     const {title, genre, plot, cast} = req.body;
//     try {
//         await Movie.findByIdAndUpdate(movieid, {genre, plot, cast}, {new:true})
//         res.redirect(`/movies/${movieid}`)
//     } catch (error) {
//         next(error)
//     }
// })



module.exports = router;