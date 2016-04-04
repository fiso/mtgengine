"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ButchersGlee extends UnimplementedCard {
  constructor(game) {
    super(game, "Butcher's Glee", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ButchersGlee;
