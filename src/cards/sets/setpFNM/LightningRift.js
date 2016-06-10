"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningRift extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Rift", "Friday Night Magic", "pFNM");
  }
}

module.exports = LightningRift;
