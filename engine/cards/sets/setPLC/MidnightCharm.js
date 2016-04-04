"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MidnightCharm extends Card {
  constructor(game) {
    super(game, "Midnight Charm", "Planar Chaos", "PLC");
  }
}

module.exports = MidnightCharm;
