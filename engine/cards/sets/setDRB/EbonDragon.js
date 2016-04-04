"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EbonDragon extends Card {
  constructor(game) {
    super(game, "Ebon Dragon", "From the Vault: Dragons", "DRB");
  }
}

module.exports = EbonDragon;
