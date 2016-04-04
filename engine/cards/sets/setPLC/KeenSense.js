"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KeenSense extends Card {
  constructor(game) {
    super(game, "Keen Sense", "Planar Chaos", "PLC");
  }
}

module.exports = KeenSense;
