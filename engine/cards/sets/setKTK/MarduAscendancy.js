"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarduAscendancy extends UnimplementedCard {
  constructor(game) {
    super(game, "Mardu Ascendancy", "Khans of Tarkir", "KTK");
  }
}

module.exports = MarduAscendancy;
