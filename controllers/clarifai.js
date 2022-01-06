import Clarifai from "clarifai";

const app = new Clarifai.App({
    apiKey: '6d3d8bafe090435aac9117d98d7a84d0'
   });

const handleApiCall = (req, res) => {
app.models
   .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => res.json(data))
    .catch(err => err.status(400).json('unable to work with api'))
};

export default handleApiCall;