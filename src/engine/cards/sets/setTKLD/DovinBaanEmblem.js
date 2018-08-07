"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DovinBaanEmblem extends UnimplementedCard {
  constructor (game) {
    super(game, "Dovin Baan Emblem", "Kaladesh Tokens", "TKLD");
  }
}

module.exports = DovinBaanEmblem;
