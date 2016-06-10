"use strict";
const Constants = require ("../../../Constants");
const SpinalEmbraceBase = require("../setC13/SpinalEmbrace");

class SpinalEmbrace extends SpinalEmbraceBase {
  constructor (game) {
    super(game, "Spinal Embrace", "Invasion", "INV");
  }
}

module.exports = SpinalEmbrace;
