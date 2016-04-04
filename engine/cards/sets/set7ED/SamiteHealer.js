"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SamiteHealerBase = require("../setATH/SamiteHealer.js");

class SamiteHealer extends SamiteHealerBase {
  constructor(game) {
    super(game, "Samite Healer", "Seventh Edition", "7ED");
  }
}

module.exports = SamiteHealer;
