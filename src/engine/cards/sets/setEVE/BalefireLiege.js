"use strict";
const Constants = require ("../../../Constants");
const BalefireLiegeBase = require("../setHOP/BalefireLiege");

class BalefireLiege extends BalefireLiegeBase {
  constructor (game) {
    super(game, "Balefire Liege", "Eventide", "EVE");
  }
}

module.exports = BalefireLiege;
