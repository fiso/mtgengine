"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TouchofVitae extends UnimplementedCard {
  constructor(game) {
    super(game, "Touch of Vitae", "Ice Age", "ICE");
  }
}

module.exports = TouchofVitae;
