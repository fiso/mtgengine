"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningBlow extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Blow", "Masters Edition III", "ME3");
  }
}

module.exports = LightningBlow;
