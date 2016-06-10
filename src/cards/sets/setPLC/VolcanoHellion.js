"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanoHellion extends UnimplementedCard {
  constructor (game) {
    super(game, "Volcano Hellion", "Planar Chaos", "PLC");
  }
}

module.exports = VolcanoHellion;
