"use strict";
const Constants = require ("../../../Constants");
const TitheBase = require("../setWC98/Tithe");

class Tithe extends TitheBase {
  constructor (game) {
    super(game, "Tithe", "Visions", "VIS");
  }
}

module.exports = Tithe;
