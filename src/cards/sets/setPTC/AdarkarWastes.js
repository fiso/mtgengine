"use strict";
const Constants = require ("../../../Constants");
const AdarkarWastesBase = require("../set10E/AdarkarWastes");

class AdarkarWastes extends AdarkarWastesBase {
  constructor (game) {
    super(game, "Adarkar Wastes", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = AdarkarWastes;
