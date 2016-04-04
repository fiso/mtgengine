"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpittingHydra extends Card {
  constructor(game) {
    super(game, "Spitting Hydra", "Stronghold", "STH");
  }
}

module.exports = SpittingHydra;
