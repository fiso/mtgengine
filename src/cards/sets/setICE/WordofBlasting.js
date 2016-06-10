"use strict";
const Constants = require ("../../../Constants");
const WordofBlastingBase = require("../set5ED/WordofBlasting");

class WordofBlasting extends WordofBlastingBase {
  constructor (game) {
    super(game, "Word of Blasting", "Ice Age", "ICE");
  }
}

module.exports = WordofBlasting;
