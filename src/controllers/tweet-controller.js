import TweetService from "../services/tweet-service.js";
import upload from '../config//file-upload-s3-config.js'
const tweetService = new TweetService();
const singleUploader = upload.single('image');

const createTweet = async (req, res) => {
    try {
        singleUploader(req, res, async function (err, data) {
            if (err) {
                return res.status(500).json({
                    error: err
                })
            }
            const payload = {...req.body};
            payload.image = req.file.location;
            const response = await tweetService.create(payload);
            return res.status(201).json({
                success: true,
                message: "Successfully created a tweet",
                data: response,
                err: {}
            })
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong",
            data: {},
            err: error
        });
    }

}
export default createTweet;