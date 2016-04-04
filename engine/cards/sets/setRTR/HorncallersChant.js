"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HorncallersChant extends Card {
  constructor(game) {
    super(game, "Horncaller's Chant", "Return to Ravnica", "RTR");
  }
}

module.exports = HorncallersChant;
