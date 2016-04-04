"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExaltedAngel extends Card {
  constructor(game) {
    super(game, "Exalted Angel", "From the Vault: Angels", "V15");
  }
}

module.exports = ExaltedAngel;
