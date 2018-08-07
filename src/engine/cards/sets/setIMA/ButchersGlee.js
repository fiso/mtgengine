"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ButchersGlee extends UnimplementedCard {
  constructor (game) {
    super(game, "Butcher's Glee", "Iconic Masters", "IMA");
  }
}

module.exports = ButchersGlee;
