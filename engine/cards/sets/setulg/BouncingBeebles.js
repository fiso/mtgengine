"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BouncingBeebles extends Card {
  constructor(game) {
    super(game, "Bouncing Beebles", "Urza's Legacy", "ULG");
  }
}

module.exports = BouncingBeebles;
