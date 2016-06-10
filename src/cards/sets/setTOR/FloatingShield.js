"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FloatingShield extends UnimplementedCard {
  constructor (game) {
    super(game, "Floating Shield", "Torment", "TOR");
  }
}

module.exports = FloatingShield;
