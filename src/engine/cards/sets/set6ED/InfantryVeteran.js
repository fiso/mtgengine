"use strict";
const Constants = require ("../../../Constants");
const InfantryVeteranBase = require("../setIMA/InfantryVeteran");

class InfantryVeteran extends InfantryVeteranBase {
  constructor (game) {
    super(game, "Infantry Veteran", "Classic Sixth Edition", "6ED");
  }
}

module.exports = InfantryVeteran;
