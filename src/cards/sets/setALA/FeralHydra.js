"use strict";
const Constants = require ("../../../Constants");
const FeralHydraBase = require("../setARC/FeralHydra");

class FeralHydra extends FeralHydraBase {
  constructor (game) {
    super(game, "Feral Hydra", "Shards of Alara", "ALA");
  }
}

module.exports = FeralHydra;
