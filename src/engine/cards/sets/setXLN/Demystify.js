"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Demystify extends UnimplementedCard {
  constructor (game) {
    super(game, "Demystify", "Ixalan", "XLN");
  }
}

module.exports = Demystify;
