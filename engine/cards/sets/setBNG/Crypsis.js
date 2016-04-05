"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Crypsis extends UnimplementedCard {
  constructor(game) {
    super(game, "Crypsis", "Born of the Gods", "BNG");
  }
}

module.exports = Crypsis;
