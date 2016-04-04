"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GameTrail extends Card {
  constructor(game) {
    super(game, "Game Trail", "Shadows over Innistrad", "SOI");
  }
}

module.exports = GameTrail;
