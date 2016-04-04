"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BaneslayerAngel extends Card {
  constructor(game) {
    super(game, "Baneslayer Angel", "From the Vault: Angels", "V15");
  }
}

module.exports = BaneslayerAngel;
