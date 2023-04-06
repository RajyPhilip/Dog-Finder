const DogFinder = require('../models/result');

// get  Users voted results
const AllResult = async (req, res, next) => {
    const user = req.user.id ;
    const results = await DogFinder.find({user:user});
    return res.json({
        results:results
    })
};
//   voting the winner by user
const Vote = async (req, res, next) => {
    try {
        const {dog1,dog2,winner} = req.body ;
        const user = req.user.id;
        const dogFinder = new DogFinder({
            dog1:dog1,
            dog2:dog2,
            winner:winner,
            user:user 
        })
        await dogFinder.save(); 
        return res.json({
            message:`voting successfull`
        })
    } catch (error) {
        next(error) ;
    }
};


module.exports = {
    AllResult,
    Vote
}