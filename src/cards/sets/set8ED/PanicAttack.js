"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PanicAttack extends UnimplementedCard {
  constructor (game) {
    super(game, "Panic Attack", "Eighth Edition", "8ED");
  }
}

module.exports = PanicAttack;
