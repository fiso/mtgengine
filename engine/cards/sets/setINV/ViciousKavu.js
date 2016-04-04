"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViciousKavu extends UnimplementedCard {
  constructor(game) {
    super(game, "Vicious Kavu", "Invasion", "INV");
  }
}

module.exports = ViciousKavu;
