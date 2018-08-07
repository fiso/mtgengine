"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ContraptionCannon extends UnimplementedCard {
  constructor (game) {
    super(game, "Contraption Cannon", "Unstable", "UST");
  }
}

module.exports = ContraptionCannon;
