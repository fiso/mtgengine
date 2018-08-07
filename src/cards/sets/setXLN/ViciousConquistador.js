"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViciousConquistador extends UnimplementedCard {
  constructor (game) {
    super(game, "Vicious Conquistador", "Ixalan", "XLN");
  }
}

module.exports = ViciousConquistador;
