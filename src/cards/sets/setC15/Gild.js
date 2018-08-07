"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gild extends UnimplementedCard {
  constructor (game) {
    super(game, "Gild", "Commander 2015", "C15");
  }
}

module.exports = Gild;
