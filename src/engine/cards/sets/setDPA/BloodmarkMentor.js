"use strict";
const Constants = require ("../../../Constants");
const BloodmarkMentorBase = require("../setDDG/BloodmarkMentor");

class BloodmarkMentor extends BloodmarkMentorBase {
  constructor (game) {
    super(game, "Bloodmark Mentor", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = BloodmarkMentor;
