"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SorcerersStrongbox extends UnimplementedCard {
  constructor(game) {
    super(game, "Sorcerer's Strongbox", "Archenemy", "ARC");
  }
}

module.exports = SorcerersStrongbox;
