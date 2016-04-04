"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FoulOrchard extends Card {
  constructor(game) {
    super(game, "Foul Orchard", "Shadows over Innistrad", "SOI");
  }
}

module.exports = FoulOrchard;
