"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThranFoundry extends UnimplementedCard {
  constructor (game) {
    super(game, "Thran Foundry", "Urza's Destiny", "UDS");
  }
}

module.exports = ThranFoundry;
