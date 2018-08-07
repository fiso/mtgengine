"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoggartRamGang extends UnimplementedCard {
  constructor (game) {
    super(game, "Boggart Ram-Gang", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = BoggartRamGang;
