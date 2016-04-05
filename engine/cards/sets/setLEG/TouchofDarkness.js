"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TouchofDarkness extends UnimplementedCard {
  constructor(game) {
    super(game, "Touch of Darkness", "Legends", "LEG");
  }
}

module.exports = TouchofDarkness;
