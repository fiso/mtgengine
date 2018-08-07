"use strict";
const Constants = require ("../../../Constants");
const InfernoBase = require("../set8ED/Inferno");

class Inferno extends InfernoBase {
  constructor (game) {
    super(game, "Inferno", "Magic Online Promos", "PRM");
  }
}

module.exports = Inferno;
