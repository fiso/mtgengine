"use strict";
const Constants = require ("../../../Constants");
const ShivsEmbraceBase = require("../setDDG/ShivsEmbrace");

class ShivsEmbrace extends ShivsEmbraceBase {
  constructor(game) {
    super(game, "Shiv's Embrace", "Magic 2014 Core Set", "M14");
  }
}

module.exports = ShivsEmbrace;
