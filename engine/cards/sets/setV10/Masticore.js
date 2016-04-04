"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Masticore extends Card {
  constructor(game) {
    super(game, "Masticore", "From the Vault: Relics", "V10");
  }
}

module.exports = Masticore;
