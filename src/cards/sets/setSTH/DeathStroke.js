"use strict";
const Constants = require ("../../../Constants");
const DeathStrokeBase = require("../setBTD/DeathStroke");

class DeathStroke extends DeathStrokeBase {
  constructor (game) {
    super(game, "Death Stroke", "Stronghold", "STH");
  }
}

module.exports = DeathStroke;
