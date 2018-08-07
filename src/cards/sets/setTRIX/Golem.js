"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Golem extends UnimplementedCard {
  constructor (game) {
    super(game, "Golem", "Rivals of Ixalan Tokens", "TRIX");
  }
}

module.exports = Golem;
