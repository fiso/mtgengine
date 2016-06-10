"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CowerinFear extends UnimplementedCard {
  constructor (game) {
    super(game, "Cower in Fear", "Magic 2013", "M13");
  }
}

module.exports = CowerinFear;
