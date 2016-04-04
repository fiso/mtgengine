"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SplitTailMiko extends UnimplementedCard {
  constructor(game) {
    super(game, "Split-Tail Miko", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = SplitTailMiko;
