"use strict";
const Constants = require ("../../../Constants");
const BoosterTutorBase = require("../setUNH/BoosterTutor");

class BoosterTutor extends BoosterTutorBase {
  constructor (game) {
    super(game, "Booster Tutor", "Arena League 2004", "PAL04");
  }
}

module.exports = BoosterTutor;
