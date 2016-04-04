"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoxDiamond extends Card {
  constructor(game) {
    super(game, "Mox Diamond", "From the Vault: Relics", "V10");
  }
}

module.exports = MoxDiamond;
