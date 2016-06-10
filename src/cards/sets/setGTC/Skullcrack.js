"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skullcrack extends UnimplementedCard {
  constructor (game) {
    super(game, "Skullcrack", "Gatecrash", "GTC");
  }
}

module.exports = Skullcrack;
