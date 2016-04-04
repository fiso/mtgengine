"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvengingArrow extends Card {
  constructor(game) {
    super(game, "Avenging Arrow", "Return to Ravnica", "RTR");
  }
}

module.exports = AvengingArrow;
