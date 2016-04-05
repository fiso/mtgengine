"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VenarianGlimmer extends UnimplementedCard {
  constructor(game) {
    super(game, "Venarian Glimmer", "Planar Chaos", "PLC");
  }
}

module.exports = VenarianGlimmer;
