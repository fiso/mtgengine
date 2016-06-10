"use strict";
const Constants = require ("../../../Constants");
const LeoninSkyhunterBase = require("../setDDG/LeoninSkyhunter");

class LeoninSkyhunter extends LeoninSkyhunterBase {
  constructor (game) {
    super(game, "Leonin Skyhunter", "Mirrodin Besieged", "MBS");
  }
}

module.exports = LeoninSkyhunter;
