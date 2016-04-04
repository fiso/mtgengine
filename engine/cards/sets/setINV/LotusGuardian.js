"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LotusGuardian extends Card {
  constructor(game) {
    super(game, "Lotus Guardian", "Invasion", "INV");
  }
}

module.exports = LotusGuardian;
