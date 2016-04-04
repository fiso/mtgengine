"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EmeraldDragonflyBase = require("../setCHR/EmeraldDragonfly.js");

class EmeraldDragonfly extends EmeraldDragonflyBase {
  constructor(game) {
    super(game, "Emerald Dragonfly", "Legends", "LEG");
  }
}

module.exports = EmeraldDragonfly;
