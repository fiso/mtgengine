"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishSoultiller extends Card {
  constructor(game) {
    super(game, "Elvish Soultiller", "Legions", "LGN");
  }
}

module.exports = ElvishSoultiller;
