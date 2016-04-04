"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RabidBite extends UnimplementedCard {
  constructor(game) {
    super(game, "Rabid Bite", "Shadows over Innistrad", "SOI");
  }
}

module.exports = RabidBite;
