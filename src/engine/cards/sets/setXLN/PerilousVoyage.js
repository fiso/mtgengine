"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PerilousVoyage extends UnimplementedCard {
  constructor (game) {
    super(game, "Perilous Voyage", "Ixalan", "XLN");
  }
}

module.exports = PerilousVoyage;
