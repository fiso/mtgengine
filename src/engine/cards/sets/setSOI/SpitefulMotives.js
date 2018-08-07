"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpitefulMotives extends UnimplementedCard {
  constructor (game) {
    super(game, "Spiteful Motives", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SpitefulMotives;
