"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PicktheBrain extends UnimplementedCard {
  constructor (game) {
    super(game, "Pick the Brain", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PicktheBrain;
