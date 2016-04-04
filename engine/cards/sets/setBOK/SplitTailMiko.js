"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SplitTailMiko extends Card {
  constructor(game) {
    super(game, "Split-Tail Miko", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = SplitTailMiko;
