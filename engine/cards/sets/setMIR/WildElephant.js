"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildElephant extends Card {
  constructor(game) {
    super(game, "Wild Elephant", "Mirage", "MIR");
  }
}

module.exports = WildElephant;
