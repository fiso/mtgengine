"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DenseCanopy extends UnimplementedCard {
  constructor(game) {
    super(game, "Dense Canopy", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = DenseCanopy;
