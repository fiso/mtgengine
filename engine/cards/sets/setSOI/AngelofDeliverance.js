"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelofDeliverance extends UnimplementedCard {
  constructor(game) {
    super(game, "Angel of Deliverance", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AngelofDeliverance;
