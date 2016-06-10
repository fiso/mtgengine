"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MeanderingRiver extends UnimplementedCard {
  constructor (game) {
    super(game, "Meandering River", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = MeanderingRiver;
