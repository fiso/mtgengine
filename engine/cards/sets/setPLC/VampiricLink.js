"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VampiricLink extends Card {
  constructor(game) {
    super(game, "Vampiric Link", "Planar Chaos", "PLC");
  }
}

module.exports = VampiricLink;
