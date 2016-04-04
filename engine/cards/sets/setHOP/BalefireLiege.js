"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BalefireLiegeBase = require("../setEVE/BalefireLiege.js");

class BalefireLiege extends BalefireLiegeBase {
  constructor(game) {
    super(game, "Balefire Liege", "Planechase", "HOP");
  }
}

module.exports = BalefireLiege;
