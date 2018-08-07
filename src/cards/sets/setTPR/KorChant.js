"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorChant extends UnimplementedCard {
  constructor (game) {
    super(game, "Kor Chant", "Tempest Remastered", "TPR");
  }
}

module.exports = KorChant;
