"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrenziedTilling extends UnimplementedCard {
  constructor (game) {
    super(game, "Frenzied Tilling", "Gatecrash", "GTC");
  }
}

module.exports = FrenziedTilling;
