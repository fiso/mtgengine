"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShiftyDoppelganger extends Card {
  constructor(game) {
    super(game, "Shifty Doppelganger", "Odyssey", "ODY");
  }
}

module.exports = ShiftyDoppelganger;
