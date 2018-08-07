"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThornedMoloch extends UnimplementedCard {
  constructor (game) {
    super(game, "Thorned Moloch", "Hour of Devastation", "HOU");
  }
}

module.exports = ThornedMoloch;
