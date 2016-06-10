"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tenacity extends UnimplementedCard {
  constructor (game) {
    super(game, "Tenacity", "Shadows over Innistrad", "SOI");
  }
}

module.exports = Tenacity;
