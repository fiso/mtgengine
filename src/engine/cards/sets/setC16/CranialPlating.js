"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CranialPlating extends UnimplementedCard {
  constructor (game) {
    super(game, "Cranial Plating", "Commander 2016", "C16");
  }
}

module.exports = CranialPlating;
