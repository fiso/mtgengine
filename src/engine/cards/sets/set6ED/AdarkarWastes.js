"use strict";
const Constants = require ("../../../Constants");
const AdarkarWastesBase = require("../set10E/AdarkarWastes");

class AdarkarWastes extends AdarkarWastesBase {
  constructor (game) {
    super(game, "Adarkar Wastes", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AdarkarWastes;
