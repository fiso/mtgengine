"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CharcoalDiamond extends Card {
  constructor(game) {
    super(game, "Charcoal Diamond", "Classic Sixth Edition", "6ED");
  }
}

module.exports = CharcoalDiamond;
