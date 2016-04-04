"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JungleTroll extends Card {
  constructor(game) {
    super(game, "Jungle Troll", "Mirage", "MIR");
  }
}

module.exports = JungleTroll;
