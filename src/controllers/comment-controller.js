import CommentService from "../services/comment-service.js";

const commentService=new CommentService();


export const createComment=async(req,res)=>{
try {
    const response= await commentService.create(req.query.modelId,req.query.modelType,req.user.id,req.body.content);
   console.log("from controller:",response);
    return res.status(200).json({
        success:true,
        data:response,
        message:"successfully created  comment",
        err:{}
    })
} catch (error) {
    return res.status(500).json({
        success:false,
        message:"something went wrong while creating comment",
        data:{},
        err:error
    }
    )
}
}