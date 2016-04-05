"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlatinumAngel extends UnimplementedCard {
  constructor(game) {
    super(game, "Platinum Angel", "From the Vault: Angels", "V15");
  }
}

module.exports = PlatinumAngel;
