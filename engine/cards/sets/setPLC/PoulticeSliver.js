"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PoulticeSliver extends Card {
  constructor(game) {
    super(game, "Poultice Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = PoulticeSliver;
