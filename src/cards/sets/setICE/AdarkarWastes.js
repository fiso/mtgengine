"use strict";
const Constants = require ("../../../Constants");
const AdarkarWastesBase = require("../set6ED/AdarkarWastes");

class AdarkarWastes extends AdarkarWastesBase {
  constructor(game) {
    super(game, "Adarkar Wastes", "Ice Age", "ICE");
  }
}

module.exports = AdarkarWastes;
