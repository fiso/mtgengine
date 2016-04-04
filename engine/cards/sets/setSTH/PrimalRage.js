"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrimalRage extends Card {
  constructor(game) {
    super(game, "Primal Rage", "Stronghold", "STH");
  }
}

module.exports = PrimalRage;
