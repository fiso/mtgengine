"use strict";
const Constants = require ("../../../Constants");
const ShivanReefBase = require("../setDDU/ShivanReef");

class ShivanReef extends ShivanReefBase {
  constructor (game) {
    super(game, "Shivan Reef", "Apocalypse", "APC");
  }
}

module.exports = ShivanReef;
