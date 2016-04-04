"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlatinumAngel extends Card {
  constructor(game) {
    super(game, "Platinum Angel", "From the Vault: Angels", "V15");
  }
}

module.exports = PlatinumAngel;
