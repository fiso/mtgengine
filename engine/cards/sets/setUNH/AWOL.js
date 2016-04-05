"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AWOL extends UnimplementedCard {
  constructor(game) {
    super(game, "AWOL", "Unhinged", "UNH");
  }
}

module.exports = AWOL;
