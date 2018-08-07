"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeatRay extends UnimplementedCard {
  constructor (game) {
    super(game, "Heat Ray", "Iconic Masters", "IMA");
  }
}

module.exports = HeatRay;
