"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EtherwroughtPage extends Card {
  constructor(game) {
    super(game, "Etherwrought Page", "Alara Reborn", "ARB");
  }
}

module.exports = EtherwroughtPage;
