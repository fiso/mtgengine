"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GaeasTouch extends Card {
  constructor(game) {
    super(game, "Gaea's Touch", "Masters Edition III", "ME3");
  }
}

module.exports = GaeasTouch;
