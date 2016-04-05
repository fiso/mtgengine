"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevouringStrossus extends UnimplementedCard {
  constructor(game) {
    super(game, "Devouring Strossus", "Invasion", "INV");
  }
}

module.exports = DevouringStrossus;
