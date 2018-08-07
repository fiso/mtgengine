"use strict";
const Constants = require ("../../../Constants");
const BlazingArchonBase = require("../setC16/BlazingArchon");

class BlazingArchon extends BlazingArchonBase {
  constructor (game) {
    super(game, "Blazing Archon", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BlazingArchon;
