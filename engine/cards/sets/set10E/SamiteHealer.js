"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SamiteHealerBase = require("../setATH/SamiteHealer.js");

class SamiteHealer extends SamiteHealerBase {
  constructor(game) {
    super(game, "Samite Healer", "Tenth Edition", "10E");
  }
}

module.exports = SamiteHealer;
