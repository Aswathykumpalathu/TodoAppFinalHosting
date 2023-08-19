
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://AswathyKiran:Pulser90@cluster0.zptcqr3.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('connected to atls');
})
.catch((e)=>{
    console.log('error cconnot connected')
})