"use strict";
const Constants = require ("../../../Constants");
const VividCragBase = require("../setCM2/VividCrag");

class VividCrag extends VividCragBase {
  constructor (game) {
    super(game, "Vivid Crag", "Lorwyn", "LRW");
  }
}

module.exports = VividCrag;
