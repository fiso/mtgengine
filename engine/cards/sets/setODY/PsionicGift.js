"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsionicGift extends UnimplementedCard {
  constructor(game) {
    super(game, "Psionic Gift", "Odyssey", "ODY");
  }
}

module.exports = PsionicGift;
