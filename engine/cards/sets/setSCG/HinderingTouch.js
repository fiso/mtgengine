"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HinderingTouch extends Card {
  constructor(game) {
    super(game, "Hindering Touch", "Scourge", "SCG");
  }
}

module.exports = HinderingTouch;
