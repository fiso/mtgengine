"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildColos extends UnimplementedCard {
  constructor(game) {
    super(game, "Wild Colos", "Urza's Destiny", "UDS");
  }
}

module.exports = WildColos;
