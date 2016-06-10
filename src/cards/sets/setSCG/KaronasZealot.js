"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KaronasZealot extends UnimplementedCard {
  constructor (game) {
    super(game, "Karona's Zealot", "Scourge", "SCG");
  }
}

module.exports = KaronasZealot;
