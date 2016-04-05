"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BallynockTrapper extends UnimplementedCard {
  constructor(game) {
    super(game, "Ballynock Trapper", "Eventide", "EVE");
  }
}

module.exports = BallynockTrapper;
