"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DerangedHermit extends UnimplementedCard {
  constructor(game) {
    super(game, "Deranged Hermit", "Judge Gift Program", "pJGP");
  }
}

module.exports = DerangedHermit;
