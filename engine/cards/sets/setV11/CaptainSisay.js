"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CaptainSisay extends Card {
  constructor(game) {
    super(game, "Captain Sisay", "From the Vault: Legends", "V11");
  }
}

module.exports = CaptainSisay;
