"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VinesoftheRecluse extends UnimplementedCard {
  constructor(game) {
    super(game, "Vines of the Recluse", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = VinesoftheRecluse;
