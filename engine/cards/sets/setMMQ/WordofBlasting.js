"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WordofBlastingBase = require("../set5ED/WordofBlasting.js");

class WordofBlasting extends WordofBlastingBase {
  constructor(game) {
    super(game, "Word of Blasting", "Mercadian Masques", "MMQ");
  }
}

module.exports = WordofBlasting;
