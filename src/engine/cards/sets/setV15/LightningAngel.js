"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Angel", "From the Vault: Angels", "V15");
  }
}

module.exports = LightningAngel;
