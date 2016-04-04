"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningCloud extends UnimplementedCard {
  constructor(game) {
    super(game, "Lightning Cloud", "Visions", "VIS");
  }
}

module.exports = LightningCloud;
