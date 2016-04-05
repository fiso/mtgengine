"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GameTrail extends UnimplementedCard {
  constructor(game) {
    super(game, "Game Trail", "Shadows over Innistrad", "SOI");
  }
}

module.exports = GameTrail;
