"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InfantryVeteranBase = require("../setATH/InfantryVeteran.js");

class InfantryVeteran extends InfantryVeteranBase {
  constructor(game) {
    super(game, "Infantry Veteran", "Battle Royale Box Set", "BRB");
  }
}

module.exports = InfantryVeteran;
