"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hijack extends UnimplementedCard {
  constructor (game) {
    super(game, "Hijack", "Ixalan", "XLN");
  }
}

module.exports = Hijack;
