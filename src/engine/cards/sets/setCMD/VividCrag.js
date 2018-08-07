"use strict";
const Constants = require ("../../../Constants");
const VividCragBase = require("../setCM2/VividCrag");

class VividCrag extends VividCragBase {
  constructor (game) {
    super(game, "Vivid Crag", "Commander 2011", "CMD");
  }
}

module.exports = VividCrag;
