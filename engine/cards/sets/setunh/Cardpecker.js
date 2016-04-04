"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cardpecker extends UnimplementedCard {
  constructor(game) {
    super(game, "Cardpecker", "Unhinged", "UNH");
  }
}

module.exports = Cardpecker;
