"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningBlow extends UnimplementedCard {
  constructor(game) {
    super(game, "Lightning Blow", "Ice Age", "ICE");
  }
}

module.exports = LightningBlow;
