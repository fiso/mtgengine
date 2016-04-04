"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TidalSurgeBase = require("../set6ED/TidalSurge.js");

class TidalSurge extends TidalSurgeBase {
  constructor(game) {
    super(game, "Tidal Surge", "Stronghold", "STH");
  }
}

module.exports = TidalSurge;
