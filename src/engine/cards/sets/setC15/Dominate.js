"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dominate extends UnimplementedCard {
  constructor (game) {
    super(game, "Dominate", "Commander 2015", "C15");
  }
}

module.exports = Dominate;
