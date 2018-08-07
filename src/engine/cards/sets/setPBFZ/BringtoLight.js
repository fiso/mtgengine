"use strict";
const Constants = require ("../../../Constants");
const BringtoLightBase = require("../setBFZ/BringtoLight");

class BringtoLight extends BringtoLightBase {
  constructor (game) {
    super(game, "Bring to Light", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = BringtoLight;
