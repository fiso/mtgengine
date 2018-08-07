"use strict";
const Constants = require ("../../../Constants");
const OutpostSiegeBase = require("../setC17/OutpostSiege");

class OutpostSiege extends OutpostSiegeBase {
  constructor (game) {
    super(game, "Outpost Siege", "Fate Reforged", "FRF");
  }
}

module.exports = OutpostSiege;
