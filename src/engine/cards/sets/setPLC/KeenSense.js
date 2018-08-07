"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeenSense extends UnimplementedCard {
  constructor (game) {
    super(game, "Keen Sense", "Planar Chaos", "PLC");
  }
}

module.exports = KeenSense;
