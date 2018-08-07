"use strict";
const Constants = require ("../../../Constants");
const FrontierSiegeBase = require("../setC17/FrontierSiege");

class FrontierSiege extends FrontierSiegeBase {
  constructor (game) {
    super(game, "Frontier Siege", "Fate Reforged", "FRF");
  }
}

module.exports = FrontierSiege;
