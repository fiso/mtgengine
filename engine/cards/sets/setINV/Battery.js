"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Battery extends UnimplementedCard {
  constructor(game) {
    super(game, "Battery", "Invasion", "INV");
  }
}

module.exports = Battery;
