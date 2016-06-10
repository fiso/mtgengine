"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Nice extends UnimplementedCard {
  constructor (game) {
    super(game, "Nice", "Happy Holidays", "pHHO");
  }
}

module.exports = Nice;
