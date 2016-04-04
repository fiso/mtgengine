"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KeiTakahashi extends Card {
  constructor(game) {
    super(game, "Kei Takahashi", "Chronicles", "CHR");
  }
}

module.exports = KeiTakahashi;
