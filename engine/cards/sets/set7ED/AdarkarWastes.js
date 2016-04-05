"use strict";
const Constants = require ("../../../Constants");
const AdarkarWastesBase = require("../set6ED/AdarkarWastes");

class AdarkarWastes extends AdarkarWastesBase {
  constructor(game) {
    super(game, "Adarkar Wastes", "Seventh Edition", "7ED");
  }
}

module.exports = AdarkarWastes;
