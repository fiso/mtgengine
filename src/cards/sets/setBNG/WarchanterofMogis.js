"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarchanterofMogis extends UnimplementedCard {
  constructor (game) {
    super(game, "Warchanter of Mogis", "Born of the Gods", "BNG");
  }
}

module.exports = WarchanterofMogis;
