"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TidalSurgeBase = require("../set6ED/TidalSurge.js");

class TidalSurge extends TidalSurgeBase {
  constructor(game) {
    super(game, "Tidal Surge", "Portal Second Age", "PO2");
  }
}

module.exports = TidalSurge;
