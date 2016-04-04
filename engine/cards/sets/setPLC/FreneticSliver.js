"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FreneticSliver extends Card {
  constructor(game) {
    super(game, "Frenetic Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = FreneticSliver;
