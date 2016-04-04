"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FeralHydraBase = require("../setARC/FeralHydra.js");

class FeralHydra extends FeralHydraBase {
  constructor(game) {
    super(game, "Feral Hydra", "Shards of Alara", "ALA");
  }
}

module.exports = FeralHydra;
