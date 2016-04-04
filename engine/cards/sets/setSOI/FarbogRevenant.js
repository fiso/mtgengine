"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FarbogRevenant extends Card {
  constructor(game) {
    super(game, "Farbog Revenant", "Shadows over Innistrad", "SOI");
  }
}

module.exports = FarbogRevenant;
