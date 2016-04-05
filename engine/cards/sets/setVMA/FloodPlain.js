"use strict";
const Constants = require ("../../../Constants");
const FloodPlainBase = require("../setDDI/FloodPlain");

class FloodPlain extends FloodPlainBase {
  constructor(game) {
    super(game, "Flood Plain", "Vintage Masters", "VMA");
  }
}

module.exports = FloodPlain;
