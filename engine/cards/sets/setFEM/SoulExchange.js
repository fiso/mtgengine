"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulExchange extends Card {
  constructor(game) {
    super(game, "Soul Exchange", "Fallen Empires", "FEM");
  }
}

module.exports = SoulExchange;
