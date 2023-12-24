import app from './config/express.config';
import { userRoutes } from './routes/user.routes';
import connectToDatabase from './config/mongoose.config';
// Define routes
app.use('/api/users', userRoutes);

app.get("/", async(req,res) =>{
  return res.send({isSuccess:true,message:"Code Working"})
})

connectToDatabase()
// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
