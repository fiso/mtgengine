"use strict";
const Constants = require ("../../../Constants");
const EmeraldDragonflyBase = require("../setCHR/EmeraldDragonfly");

class EmeraldDragonfly extends EmeraldDragonflyBase {
  constructor(game) {
    super(game, "Emerald Dragonfly", "Legends", "LEG");
  }
}

module.exports = EmeraldDragonfly;
