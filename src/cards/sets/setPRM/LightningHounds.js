"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningHounds extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Hounds", "Magic Online Promos", "PRM");
  }
}

module.exports = LightningHounds;
