"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BatteringSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Battering Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = BatteringSliver;
