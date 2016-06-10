"use strict";
const Constants = require ("../../../Constants");
const FemerefArchersBase = require("../set6ED/FemerefArchers");

class FemerefArchers extends FemerefArchersBase {
  constructor (game) {
    super(game, "Femeref Archers", "Seventh Edition", "7ED");
  }
}

module.exports = FemerefArchers;
