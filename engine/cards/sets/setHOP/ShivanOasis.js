"use strict";
const Constants = require ("../../../Constants");
const ShivanOasisBase = require("../setDDE/ShivanOasis");

class ShivanOasis extends ShivanOasisBase {
  constructor(game) {
    super(game, "Shivan Oasis", "Planechase", "HOP");
  }
}

module.exports = ShivanOasis;
