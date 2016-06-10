"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmeriaAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Emeria Angel", "WPN and Gateway", "pWPN");
  }
}

module.exports = EmeriaAngel;
