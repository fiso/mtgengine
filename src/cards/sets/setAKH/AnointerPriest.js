"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnointerPriest extends UnimplementedCard {
  constructor (game) {
    super(game, "Anointer Priest", "Amonkhet", "AKH");
  }
}

module.exports = AnointerPriest;
