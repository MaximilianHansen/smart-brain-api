
const getEntries = (req, res, db) => {
const { id } = req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {res.json(entries[0]);
    })
    .catch(err => err.status(400).json('unable to get entries'))
}

export default getEntries;