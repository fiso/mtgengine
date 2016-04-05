"use strict";
const Constants = require ("../../../Constants");
const ShivanReefBase = require("../setAPC/ShivanReef");

class ShivanReef extends ShivanReefBase {
  constructor(game) {
    super(game, "Shivan Reef", "Magic Origins", "ORI");
  }
}

module.exports = ShivanReef;
