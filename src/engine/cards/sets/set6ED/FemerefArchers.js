"use strict";
const Constants = require ("../../../Constants");
const FemerefArchersBase = require("../set10E/FemerefArchers");

class FemerefArchers extends FemerefArchersBase {
  constructor (game) {
    super(game, "Femeref Archers", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FemerefArchers;
