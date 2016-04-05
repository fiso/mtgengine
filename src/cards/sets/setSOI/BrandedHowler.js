"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrandedHowler extends UnimplementedCard {
  constructor(game) {
    super(game, "Branded Howler", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BrandedHowler;
