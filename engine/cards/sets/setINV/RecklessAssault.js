"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RecklessAssault extends Card {
  constructor(game) {
    super(game, "Reckless Assault", "Invasion", "INV");
  }
}

module.exports = RecklessAssault;
