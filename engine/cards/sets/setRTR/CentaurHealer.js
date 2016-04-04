"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CentaurHealer extends Card {
  constructor(game) {
    super(game, "Centaur Healer", "Return to Ravnica", "RTR");
  }
}

module.exports = CentaurHealer;
