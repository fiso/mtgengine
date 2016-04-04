"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiscipleoftheVault extends Card {
  constructor(game) {
    super(game, "Disciple of the Vault", "Mirrodin", "MRD");
  }
}

module.exports = DiscipleoftheVault;
