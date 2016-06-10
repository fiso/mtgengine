"use strict";
const Constants = require ("../../../Constants");
const InfantryVeteranBase = require("../setATH/InfantryVeteran");

class InfantryVeteran extends InfantryVeteranBase {
  constructor (game) {
    super(game, "Infantry Veteran", "Visions", "VIS");
  }
}

module.exports = InfantryVeteran;
