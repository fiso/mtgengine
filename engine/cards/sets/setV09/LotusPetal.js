"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LotusPetal extends Card {
  constructor(game) {
    super(game, "Lotus Petal", "From the Vault: Exiled", "V09");
  }
}

module.exports = LotusPetal;
