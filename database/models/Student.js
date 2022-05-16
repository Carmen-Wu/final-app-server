/*==================================================
/database/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
  },
  gpa: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      max: {
        args: [4.0],
        msg: "Can't be greater than 4.0"
      },
      min:{
        args: [0.0],
        msg: "Can't be less than 0.0"
      }
    }
  },
});

// Export the student model
module.exports = Student;