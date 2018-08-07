"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BowerPassage extends UnimplementedCard {
  constructor (game) {
    super(game, "Bower Passage", "Avacyn Restored", "AVR");
  }
}

module.exports = BowerPassage;
