var mongoose = require('mongoose')
var validator = require('validator')
var AuthorSchema = new mongoose.Schema({
  first_name: { type: String, required: true, maxlength: 100 },
  family_name: { type: String, required: true, maxlength: 100 },
  date_of_birth: Date,
  date_of_death: Date
})

// Virtual for author's full name
AuthorSchema
  .virtual('name')
  .get(function () {
    return this.family_name + ', ' + this.first_name;
  });

// Virtual for author's lifespan
AuthorSchema
  .virtual('lifespan')
  .get(function () {
    if(this.date_of_death && this.date_of_birth)
      return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
    return "Undefined"
  });

// Virtual for author's URL
AuthorSchema.virtual("url").get(() => {
  return '/catalog/author/' + this._id;
})

//Export model
module.exports = mongoose.model('Author', AuthorSchema);