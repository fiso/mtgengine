"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Duh extends UnimplementedCard {
  constructor(game) {
    super(game, "Duh", "Unhinged", "UNH");
  }
}

module.exports = Duh;
