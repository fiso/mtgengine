"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WirewoodGuardian extends Card {
  constructor(game) {
    super(game, "Wirewood Guardian", "Scourge", "SCG");
  }
}

module.exports = WirewoodGuardian;
