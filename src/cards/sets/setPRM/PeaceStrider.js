"use strict";
const Constants = require ("../../../Constants");
const PeaceStriderBase = require("../setBBD/PeaceStrider");

class PeaceStrider extends PeaceStriderBase {
  constructor (game) {
    super(game, "Peace Strider", "Magic Online Promos", "PRM");
  }
}

module.exports = PeaceStrider;
