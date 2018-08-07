"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrypticGateway extends UnimplementedCard {
  constructor (game) {
    super(game, "Cryptic Gateway", "Onslaught", "ONS");
  }
}

module.exports = CrypticGateway;
