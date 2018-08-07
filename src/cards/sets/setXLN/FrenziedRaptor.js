"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrenziedRaptor extends UnimplementedCard {
  constructor (game) {
    super(game, "Frenzied Raptor", "Ixalan", "XLN");
  }
}

module.exports = FrenziedRaptor;
