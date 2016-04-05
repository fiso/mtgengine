"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PaperfinRascal extends UnimplementedCard {
  constructor(game) {
    super(game, "Paperfin Rascal", "Lorwyn", "LRW");
  }
}

module.exports = PaperfinRascal;
