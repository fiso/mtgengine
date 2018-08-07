"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lobotomy extends UnimplementedCard {
  constructor (game) {
    super(game, "Lobotomy", "Friday Night Magic 2006", "F06");
  }
}

module.exports = Lobotomy;
