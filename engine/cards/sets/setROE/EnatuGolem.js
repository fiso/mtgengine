"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnatuGolem extends Card {
  constructor(game) {
    super(game, "Enatu Golem", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EnatuGolem;
