"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DawnCharm extends Card {
  constructor(game) {
    super(game, "Dawn Charm", "Planar Chaos", "PLC");
  }
}

module.exports = DawnCharm;
