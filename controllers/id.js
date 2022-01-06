const getId = () => {

const { id } = req.params;
    db.select('*').from('users').where({id}).then(user=> {
        if(user.length){
            res.json(user[0])}
          else {
            res.status(400).json("not found")}
    }) }

export default getId;