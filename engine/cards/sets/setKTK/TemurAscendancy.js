"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemurAscendancy extends UnimplementedCard {
  constructor(game) {
    super(game, "Temur Ascendancy", "Khans of Tarkir", "KTK");
  }
}

module.exports = TemurAscendancy;
