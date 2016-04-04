"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SinisterConcoction extends Card {
  constructor(game) {
    super(game, "Sinister Concoction", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SinisterConcoction;
