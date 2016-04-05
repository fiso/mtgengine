"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EtherwroughtPage extends UnimplementedCard {
  constructor(game) {
    super(game, "Etherwrought Page", "Alara Reborn", "ARB");
  }
}

module.exports = EtherwroughtPage;
