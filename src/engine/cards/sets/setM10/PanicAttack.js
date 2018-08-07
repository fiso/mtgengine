"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PanicAttack extends UnimplementedCard {
  constructor (game) {
    super(game, "Panic Attack", "Magic 2010", "M10");
  }
}

module.exports = PanicAttack;
