"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpittingSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Spitting Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = SpittingSliver;
