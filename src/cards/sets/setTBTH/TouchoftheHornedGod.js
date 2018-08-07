"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TouchoftheHornedGod extends UnimplementedCard {
  constructor (game) {
    super(game, "Touch of the Horned God", "Battle the Horde", "TBTH");
  }
}

module.exports = TouchoftheHornedGod;
