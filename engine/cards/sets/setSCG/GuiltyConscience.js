"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuiltyConscience extends Card {
  constructor(game) {
    super(game, "Guilty Conscience", "Scourge", "SCG");
  }
}

module.exports = GuiltyConscience;
