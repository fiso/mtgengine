"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InfantryVeteranBase = require("../setATH/InfantryVeteran.js");

class InfantryVeteran extends InfantryVeteranBase {
  constructor(game) {
    super(game, "Infantry Veteran", "Ninth Edition", "9ED");
  }
}

module.exports = InfantryVeteran;
