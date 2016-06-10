"use strict";
const Constants = require ("../../../Constants");
const InfantryVeteranBase = require("../setATH/InfantryVeteran");

class InfantryVeteran extends InfantryVeteranBase {
  constructor (game) {
    super(game, "Infantry Veteran", "Classic Sixth Edition", "6ED");
  }
}

module.exports = InfantryVeteran;
