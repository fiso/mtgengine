"use strict";
const Constants = require ("../../../Constants");
const ShivsEmbraceBase = require("../setDDG/ShivsEmbrace");

class ShivsEmbrace extends ShivsEmbraceBase {
  constructor(game) {
    super(game, "Shiv's Embrace", "Urza's Saga", "USG");
  }
}

module.exports = ShivsEmbrace;
