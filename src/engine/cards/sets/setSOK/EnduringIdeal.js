"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnduringIdeal extends UnimplementedCard {
  constructor (game) {
    super(game, "Enduring Ideal", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = EnduringIdeal;
