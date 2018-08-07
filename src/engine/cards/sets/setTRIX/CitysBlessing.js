"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CitysBlessing extends UnimplementedCard {
  constructor (game) {
    super(game, "City's Blessing", "Rivals of Ixalan Tokens", "TRIX");
  }
}

module.exports = CitysBlessing;
