"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BurrentonBombardierBase = require("../setDDF/BurrentonBombardier.js");

class BurrentonBombardier extends BurrentonBombardierBase {
  constructor(game) {
    super(game, "Burrenton Bombardier", "Morningtide", "MOR");
  }
}

module.exports = BurrentonBombardier;
