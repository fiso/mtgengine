"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalduvianHorde extends UnimplementedCard {
  constructor (game) {
    super(game, "Balduvian Horde", "Masters 25", "A25");
  }
}

module.exports = BalduvianHorde;
