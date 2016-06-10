"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrassSecretary extends UnimplementedCard {
  constructor (game) {
    super(game, "Brass Secretary", "Urza's Destiny", "UDS");
  }
}

module.exports = BrassSecretary;
