"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoldeviGolem extends Card {
  constructor(game) {
    super(game, "Soldevi Golem", "Ice Age", "ICE");
  }
}

module.exports = SoldeviGolem;
