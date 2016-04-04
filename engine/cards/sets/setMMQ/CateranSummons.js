"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CateranSummons extends Card {
  constructor(game) {
    super(game, "Cateran Summons", "Mercadian Masques", "MMQ");
  }
}

module.exports = CateranSummons;
