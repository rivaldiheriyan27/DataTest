'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let participant = require("../data/participant.json");

    participant.forEach(el => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });
   
    await queryInterface.bulkInsert('Participants', participant,{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Participants', null, {});
  }
};
