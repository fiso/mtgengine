"use strict";
const Constants = require ("../../../Constants");
const InfantryVeteranBase = require("../setATH/InfantryVeteran");

class InfantryVeteran extends InfantryVeteranBase {
  constructor(game) {
    super(game, "Infantry Veteran", "Magic 2011", "M11");
  }
}

module.exports = InfantryVeteran;
