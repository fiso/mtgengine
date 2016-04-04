"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathStrokeBase = require("../setBTD/DeathStroke.js");

class DeathStroke extends DeathStrokeBase {
  constructor(game) {
    super(game, "Death Stroke", "Stronghold", "STH");
  }
}

module.exports = DeathStroke;
