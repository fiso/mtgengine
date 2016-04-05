"use strict";
const Constants = require ("../../../Constants");
const BalefireLiegeBase = require("../setEVE/BalefireLiege");

class BalefireLiege extends BalefireLiegeBase {
  constructor(game) {
    super(game, "Balefire Liege", "Planechase", "HOP");
  }
}

module.exports = BalefireLiege;
