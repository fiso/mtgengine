"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SimianSpiritGuide extends Card {
  constructor(game) {
    super(game, "Simian Spirit Guide", "Planar Chaos", "PLC");
  }
}

module.exports = SimianSpiritGuide;
