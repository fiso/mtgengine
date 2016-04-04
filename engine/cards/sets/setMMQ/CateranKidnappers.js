"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CateranKidnappers extends Card {
  constructor(game) {
    super(game, "Cateran Kidnappers", "Mercadian Masques", "MMQ");
  }
}

module.exports = CateranKidnappers;
