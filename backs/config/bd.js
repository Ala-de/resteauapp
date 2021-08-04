const mongoose =require ('mongoose')
const connectDB =async ()=>{
try {
    await mongoose.connect(
'mongodb+srv://Ala:123321@cluster0.foozx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
console.log('MongoDB connected....')}
catch(error){
console.error(error.message)
}

}
module.exports=connectDB




