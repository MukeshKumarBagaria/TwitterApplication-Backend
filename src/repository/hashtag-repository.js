import Hashtag from '../models/hashtags.js';
class HashtagRepository{

    async create(data){
        try {
            const tag = Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error)
        }
    }
    async bulkCreate(data){
        try {
            const tags=Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const tag= Hashtag.findById(id);
            return tag;
        }catch (error) {
            console.log(error);
        }
    }

   

    
    async update(id,data){
        try {
           const tag=Hashtag.findByIdAndUpdate(id,data,{new:true});
           return tag;
        } catch (error) {
            console.log(error);
            
        }
    }

    async destroy(id){
        try {
            const response=Hashtag.findByIdAndRemove(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(titleList) {
        try {
            const tags = await Hashtag.find({
                title: titleList
            });
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
 
 
}

export default HashtagRepository;