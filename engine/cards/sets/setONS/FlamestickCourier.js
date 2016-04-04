"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlamestickCourier extends Card {
  constructor(game) {
    super(game, "Flamestick Courier", "Onslaught", "ONS");
  }
}

module.exports = FlamestickCourier;
