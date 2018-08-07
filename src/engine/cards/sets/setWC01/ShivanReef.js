"use strict";
const Constants = require ("../../../Constants");
const ShivanReefBase = require("../setDDU/ShivanReef");

class ShivanReef extends ShivanReefBase {
  constructor (game) {
    super(game, "Shivan Reef", "World Championship Decks 2001", "WC01");
  }
}

module.exports = ShivanReef;
