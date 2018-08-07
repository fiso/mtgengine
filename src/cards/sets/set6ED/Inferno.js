"use strict";
const Constants = require ("../../../Constants");
const InfernoBase = require("../set8ED/Inferno");

class Inferno extends InfernoBase {
  constructor (game) {
    super(game, "Inferno", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Inferno;
