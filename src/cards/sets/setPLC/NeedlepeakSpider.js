"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeedlepeakSpider extends UnimplementedCard {
  constructor (game) {
    super(game, "Needlepeak Spider", "Planar Chaos", "PLC");
  }
}

module.exports = NeedlepeakSpider;
