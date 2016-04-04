"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeoninSkyhunterBase = require("../setDDG/LeoninSkyhunter.js");

class LeoninSkyhunter extends LeoninSkyhunterBase {
  constructor(game) {
    super(game, "Leonin Skyhunter", "Mirrodin Besieged", "MBS");
  }
}

module.exports = LeoninSkyhunter;
