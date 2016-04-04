"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalderaKavu extends UnimplementedCard {
  constructor(game) {
    super(game, "Caldera Kavu", "Planeshift", "PLS");
  }
}

module.exports = CalderaKavu;
