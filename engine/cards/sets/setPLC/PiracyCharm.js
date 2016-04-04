"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PiracyCharm extends Card {
  constructor(game) {
    super(game, "Piracy Charm", "Planar Chaos", "PLC");
  }
}

module.exports = PiracyCharm;
