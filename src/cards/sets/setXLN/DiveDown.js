"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiveDown extends UnimplementedCard {
  constructor (game) {
    super(game, "Dive Down", "Ixalan", "XLN");
  }
}

module.exports = DiveDown;
