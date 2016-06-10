"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KarametrasAcolyte extends UnimplementedCard {
  constructor (game) {
    super(game, "Karametra's Acolyte", "Media Inserts", "pMEI");
  }
}

module.exports = KarametrasAcolyte;
