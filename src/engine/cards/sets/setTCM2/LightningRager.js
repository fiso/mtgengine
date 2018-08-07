"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningRager extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Rager", "Commander Anthology Volume II Tokens", "TCM2");
  }
}

module.exports = LightningRager;
