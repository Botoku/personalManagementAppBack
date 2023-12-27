const mongoose = require('mongoose')
const connectionString = `mongodb+srv://jbotoku:zbAzBmu3nuZV8Cjy@cluster0.1kjqivd.mongodb.net/PERSONAL-MANAGEMENT-APP`


mongoose.connect(connectionString).then(() => console.log('connected to DB')).catch(err => console.log(err))

