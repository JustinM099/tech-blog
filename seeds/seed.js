const seedComments = require('./comment-seeds');
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
// const seedBottleCategories = require('./bottle-category-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    try{
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
    }catch(err){
        console.log(err)
    } try{
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
    }catch(err){
        console.log(err)
    } 
    try{
  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');
    }catch(err){
        console.log(err)
    }
     try{
  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');
    }catch(err){
        console.log(err)
    }
   
   
  // await seedBottleCategories();
  // console.log('\n----- BOTTLE CATEGORIES SEEDED -----\n');

  process.exit(0);
};

seedAll();