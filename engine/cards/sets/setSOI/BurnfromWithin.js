"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BurnfromWithin extends Card {
  constructor(game) {
    super(game, "Burn from Within", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BurnfromWithin;
