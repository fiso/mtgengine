"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdornedPouncer extends UnimplementedCard {
  constructor (game) {
    super(game, "Adorned Pouncer", "Hour of Devastation", "HOU");
  }
}

module.exports = AdornedPouncer;
