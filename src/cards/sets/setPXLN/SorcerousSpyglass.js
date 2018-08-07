"use strict";
const Constants = require ("../../../Constants");
const SorcerousSpyglassBase = require("../setXLN/SorcerousSpyglass");

class SorcerousSpyglass extends SorcerousSpyglassBase {
  constructor (game) {
    super(game, "Sorcerous Spyglass", "Ixalan Promos", "PXLN");
  }
}

module.exports = SorcerousSpyglass;
