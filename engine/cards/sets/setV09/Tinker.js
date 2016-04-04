"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tinker extends Card {
  constructor(game) {
    super(game, "Tinker", "From the Vault: Exiled", "V09");
  }
}

module.exports = Tinker;
