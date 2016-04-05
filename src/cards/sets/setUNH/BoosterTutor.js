"use strict";
const Constants = require ("../../../Constants");
const BoosterTutorBase = require("../setpARL/BoosterTutor");

class BoosterTutor extends BoosterTutorBase {
  constructor(game) {
    super(game, "Booster Tutor", "Unhinged", "UNH");
  }
}

module.exports = BoosterTutor;
