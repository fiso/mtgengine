"use strict";
const Constants = require ("../../../Constants");
const ShivanReefBase = require("../setDDU/ShivanReef");

class ShivanReef extends ShivanReefBase {
  constructor (game) {
    super(game, "Shivan Reef", "Magic 2015", "M15");
  }
}

module.exports = ShivanReef;
