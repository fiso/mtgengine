"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PiaNalaar extends UnimplementedCard {
  constructor (game) {
    super(game, "Pia Nalaar", "Kaladesh", "KLD");
  }
}

module.exports = PiaNalaar;
