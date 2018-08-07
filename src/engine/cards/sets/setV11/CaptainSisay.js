"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaptainSisay extends UnimplementedCard {
  constructor (game) {
    super(game, "Captain Sisay", "From the Vault: Legends", "V11");
  }
}

module.exports = CaptainSisay;
