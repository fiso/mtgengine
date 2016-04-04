"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ValakuttheMoltenPinnacleBase = require("../setpLPA/ValakuttheMoltenPinnacle.js");

class ValakuttheMoltenPinnacle extends ValakuttheMoltenPinnacleBase {
  constructor(game) {
    super(game, "Valakut, the Molten Pinnacle", "Zendikar", "ZEN");
  }
}

module.exports = ValakuttheMoltenPinnacle;
