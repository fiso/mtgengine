"use strict";
const Constants = require ("../../../Constants");
const HornofGreedBase = require("../setCN2/HornofGreed");

class HornofGreed extends HornofGreedBase {
  constructor (game) {
    super(game, "Horn of Greed", "Stronghold", "STH");
  }
}

module.exports = HornofGreed;
