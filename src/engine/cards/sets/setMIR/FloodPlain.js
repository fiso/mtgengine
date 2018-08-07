"use strict";
const Constants = require ("../../../Constants");
const FloodPlainBase = require("../setVMA/FloodPlain");

class FloodPlain extends FloodPlainBase {
  constructor (game) {
    super(game, "Flood Plain", "Mirage", "MIR");
  }
}

module.exports = FloodPlain;
