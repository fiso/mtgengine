"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoneMissing extends UnimplementedCard {
  constructor (game) {
    super(game, "Gone Missing", "Shadows over Innistrad", "SOI");
  }
}

module.exports = GoneMissing;
