"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GaeasBalance extends Card {
  constructor(game) {
    super(game, "Gaea's Balance", "Apocalypse", "APC");
  }
}

module.exports = GaeasBalance;
