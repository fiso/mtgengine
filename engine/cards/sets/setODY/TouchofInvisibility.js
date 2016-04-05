"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TouchofInvisibility extends UnimplementedCard {
  constructor(game) {
    super(game, "Touch of Invisibility", "Odyssey", "ODY");
  }
}

module.exports = TouchofInvisibility;
