"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoxLotus extends Card {
  constructor(game) {
    super(game, "Mox Lotus", "Unhinged", "UNH");
  }
}

module.exports = MoxLotus;
