"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuntingWilds extends Card {
  constructor(game) {
    super(game, "Hunting Wilds", "Planar Chaos", "PLC");
  }
}

module.exports = HuntingWilds;
