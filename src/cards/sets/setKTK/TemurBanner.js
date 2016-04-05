"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemurBanner extends UnimplementedCard {
  constructor(game) {
    super(game, "Temur Banner", "Khans of Tarkir", "KTK");
  }
}

module.exports = TemurBanner;
