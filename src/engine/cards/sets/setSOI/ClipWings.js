"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClipWings extends UnimplementedCard {
  constructor (game) {
    super(game, "Clip Wings", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ClipWings;
