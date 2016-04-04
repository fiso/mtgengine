"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlackerLotus extends Card {
  constructor(game) {
    super(game, "Blacker Lotus", "Unglued", "UGL");
  }
}

module.exports = BlackerLotus;
