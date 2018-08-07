"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmperorsVanguard extends UnimplementedCard {
  constructor (game) {
    super(game, "Emperor's Vanguard", "Ixalan", "XLN");
  }
}

module.exports = EmperorsVanguard;
