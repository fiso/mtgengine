"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BaneslayerAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Baneslayer Angel", "From the Vault: Angels", "V15");
  }
}

module.exports = BaneslayerAngel;
