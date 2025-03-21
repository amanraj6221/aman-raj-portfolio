const mongoose = require('mongoose'); 

const MONGO_URI = 'mongodb+srv://amanraj0908:Prince2702@aman.znoaw.mongodb.net/contact-form?retryWrites=true&w=majority'; 

mongoose.connect(MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}) 
.then(() => { 
    console.log('Connected to MongoDB'); 
}) 
.catch((error) => { 
    console.error('Error connecting to MongoDB:', error); 
}); 