"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BriarPatch extends UnimplementedCard {
  constructor (game) {
    super(game, "Briar Patch", "Mercadian Masques", "MMQ");
  }
}

module.exports = BriarPatch;
