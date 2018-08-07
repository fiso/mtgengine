"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DirtyRat extends UnimplementedCard {
  constructor (game) {
    super(game, "Dirty Rat", "Unstable", "UST");
  }
}

module.exports = DirtyRat;
