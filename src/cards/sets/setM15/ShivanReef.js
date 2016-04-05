"use strict";
const Constants = require ("../../../Constants");
const ShivanReefBase = require("../setAPC/ShivanReef");

class ShivanReef extends ShivanReefBase {
  constructor(game) {
    super(game, "Shivan Reef", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ShivanReef;
