"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlteredEgo extends Card {
  constructor(game) {
    super(game, "Altered Ego", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AlteredEgo;
