"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StonySilence extends UnimplementedCard {
  constructor (game) {
    super(game, "Stony Silence", "Modern Masters 2017", "MM3");
  }
}

module.exports = StonySilence;
