"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rile extends UnimplementedCard {
  constructor (game) {
    super(game, "Rile", "Ixalan", "XLN");
  }
}

module.exports = Rile;
