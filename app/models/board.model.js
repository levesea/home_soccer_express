module.exports = mongoose => mongoose.model('board',
    mongoose.Schema(
        {
            title: String,
            name: String,
            team: String,
            subject: String
            },{timestamps:true}
        )
)