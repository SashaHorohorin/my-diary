const {Post} = require('../models/models')
const ApiError = require('../error/ApiError')


class PostController{
    async createPost(req, res, next) {
        let {title, note, datetime} = req.body
        if(!title){
            return next(ApiError.badRequest('Поле title пустое'))
        }
        if(title.length > 200){
            return next(ApiError.badRequest('В поле title больше 200 символов'))
        }
        if(note.length > 2000){
            return next(ApiError.badRequest('В поле note больше 2000 символов'))
        }
        let arrDate = datetime.split(' ')
        let date = arrDate[0].split('.')
        let time = arrDate[1].split(':')

        datetime = new Date(+date[2], --date[1], ++date[0], +time[0], +time[1]);
        if (!(datetime instanceof Date)) {
            return next(ApiError.badRequest('Некорректные данные в поле datetime'));
        }
        if (isNaN(datetime.getTime())){
            return next(ApiError.badRequest('Некорректные данные в поле datetime'));
        }
        
        const post = await Post.create({title, note, datetime})
        
        res.json(post)
    }
    async getPosts(req, res) {
        let {limit, page, reverse} = req.query
        let sortPosts = []
        page = page || 1
        limit = limit || 6
        let offset = page * limit - limit;
        let posts = await Post.findAll();
        posts.sort(function(a, b) {
            return b.datetime - a.datetime
        })
        if(reverse == 'true'){
            posts = posts.reverse();
        }
        
        for(let i = offset; i < offset + +limit; i++){
            if(posts[i] == null){
                break
            }
            sortPosts.push(posts[i])
        }
        
        const result = {
            pageAll: Math.ceil(posts.length / limit),
            posts: sortPosts
        }
        return res.json(result)
    }
    async getOnePost(req, res, next) {
        const id = req.params.id;
        const post = await Post.findAll({where: {id}})
        if(post.length === 0) {
            return next(ApiError.badRequest('Пост с таким id не найден'))
        }
        return res.json(post)
    }
}

module.exports = new PostController();