"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlanarOutburst extends UnimplementedCard {
  constructor(game) {
    super(game, "Planar Outburst", "Battle for Zendikar", "BFZ");
  }
}

module.exports = PlanarOutburst;
