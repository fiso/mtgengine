"use strict";
const Constants = require ("../../../Constants");
const ValakuttheMoltenPinnacleBase = require("../setPZEN/ValakuttheMoltenPinnacle");

class ValakuttheMoltenPinnacle extends ValakuttheMoltenPinnacleBase {
  constructor (game) {
    super(game, "Valakut, the Molten Pinnacle", "Zendikar", "ZEN");
  }
}

module.exports = ValakuttheMoltenPinnacle;
