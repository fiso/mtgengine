"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class When extends UnimplementedCard {
  constructor (game) {
    super(game, "When", "Unhinged", "UNH");
  }
}

module.exports = When;
