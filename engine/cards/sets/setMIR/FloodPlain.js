"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FloodPlainBase = require("../setDDI/FloodPlain.js");

class FloodPlain extends FloodPlainBase {
  constructor(game) {
    super(game, "Flood Plain", "Mirage", "MIR");
  }
}

module.exports = FloodPlain;
