"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sleep extends UnimplementedCard {
  constructor (game) {
    super(game, "Sleep", "Commander 2015", "C15");
  }
}

module.exports = Sleep;
