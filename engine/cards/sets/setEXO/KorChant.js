"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorChant extends UnimplementedCard {
  constructor(game) {
    super(game, "Kor Chant", "Exodus", "EXO");
  }
}

module.exports = KorChant;
