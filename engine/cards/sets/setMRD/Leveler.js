"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Leveler extends Card {
  constructor(game) {
    super(game, "Leveler", "Mirrodin", "MRD");
  }
}

module.exports = Leveler;
