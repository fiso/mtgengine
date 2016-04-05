"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimberlandGuide extends UnimplementedCard {
  constructor(game) {
    super(game, "Timberland Guide", "Avacyn Restored", "AVR");
  }
}

module.exports = TimberlandGuide;
