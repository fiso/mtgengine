"use strict";
const Constants = require ("../../../Constants");
const ShivsEmbraceBase = require("../setDDG/ShivsEmbrace");

class ShivsEmbrace extends ShivsEmbraceBase {
  constructor(game) {
    super(game, "Shiv's Embrace", "Magic 2011", "M11");
  }
}

module.exports = ShivsEmbrace;
