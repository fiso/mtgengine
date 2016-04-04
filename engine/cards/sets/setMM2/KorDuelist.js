"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KorDuelist extends Card {
  constructor(game) {
    super(game, "Kor Duelist", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = KorDuelist;
