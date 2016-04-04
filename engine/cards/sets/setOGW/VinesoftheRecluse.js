"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VinesoftheRecluse extends Card {
  constructor(game) {
    super(game, "Vines of the Recluse", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = VinesoftheRecluse;
