"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WidespreadPanic extends UnimplementedCard {
  constructor (game) {
    super(game, "Widespread Panic", "Commander 2013 Edition", "C13");
  }
}

module.exports = WidespreadPanic;
