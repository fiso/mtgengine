"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SorcerersStrongbox extends UnimplementedCard {
  constructor (game) {
    super(game, "Sorcerer's Strongbox", "Magic 2011", "M11");
  }
}

module.exports = SorcerersStrongbox;
