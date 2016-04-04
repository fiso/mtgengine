"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpittingSliver extends Card {
  constructor(game) {
    super(game, "Spitting Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = SpittingSliver;
