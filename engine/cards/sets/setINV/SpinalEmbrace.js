"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpinalEmbraceBase = require("../setC13/SpinalEmbrace.js");

class SpinalEmbrace extends SpinalEmbraceBase {
  constructor(game) {
    super(game, "Spinal Embrace", "Invasion", "INV");
  }
}

module.exports = SpinalEmbrace;
