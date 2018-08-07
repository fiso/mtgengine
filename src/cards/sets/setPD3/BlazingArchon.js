"use strict";
const Constants = require ("../../../Constants");
const BlazingArchonBase = require("../setC16/BlazingArchon");

class BlazingArchon extends BlazingArchonBase {
  constructor (game) {
    super(game, "Blazing Archon", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = BlazingArchon;
