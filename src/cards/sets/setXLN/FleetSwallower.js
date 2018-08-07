"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FleetSwallower extends UnimplementedCard {
  constructor (game) {
    super(game, "Fleet Swallower", "Ixalan", "XLN");
  }
}

module.exports = FleetSwallower;
