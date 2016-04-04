"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DormantSliver extends Card {
  constructor(game) {
    super(game, "Dormant Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = DormantSliver;
