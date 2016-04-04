"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BriarShield extends UnimplementedCard {
  constructor(game) {
    super(game, "Briar Shield", "Weatherlight", "WTH");
  }
}

module.exports = BriarShield;
