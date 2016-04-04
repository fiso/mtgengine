"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShaukusMinion extends Card {
  constructor(game) {
    super(game, "Shauku's Minion", "Mirage", "MIR");
  }
}

module.exports = ShaukusMinion;
