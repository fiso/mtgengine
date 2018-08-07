"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KarametrasAcolyte extends UnimplementedCard {
  constructor (game) {
    super(game, "Karametra's Acolyte", "Theros", "THS");
  }
}

module.exports = KarametrasAcolyte;
