"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorDuelist extends UnimplementedCard {
  constructor(game) {
    super(game, "Kor Duelist", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = KorDuelist;
