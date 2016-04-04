"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RuinsofTrokairBase = require("../set6ED/RuinsofTrokair.js");

class RuinsofTrokair extends RuinsofTrokairBase {
  constructor(game) {
    super(game, "Ruins of Trokair", "Fallen Empires", "FEM");
  }
}

module.exports = RuinsofTrokair;
