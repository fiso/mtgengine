"use strict";
const Constants = require ("../../../Constants");
const ValakuttheMoltenPinnacleBase = require("../setPZEN/ValakuttheMoltenPinnacle");

class ValakuttheMoltenPinnacle extends ValakuttheMoltenPinnacleBase {
  constructor (game) {
    super(game, "Valakut, the Molten Pinnacle", "Magic Online Promos", "PRM");
  }
}

module.exports = ValakuttheMoltenPinnacle;
