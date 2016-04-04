"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrimsTouch extends Card {
  constructor(game) {
    super(game, "Orim's Touch", "Invasion", "INV");
  }
}

module.exports = OrimsTouch;
