"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DefenseoftheHeart extends Card {
  constructor(game) {
    super(game, "Defense of the Heart", "Urza's Legacy", "ULG");
  }
}

module.exports = DefenseoftheHeart;
