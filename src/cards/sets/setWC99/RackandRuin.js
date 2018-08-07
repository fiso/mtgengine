"use strict";
const Constants = require ("../../../Constants");
const RackandRuinBase = require("../setWC00/RackandRuin");

class RackandRuin extends RackandRuinBase {
  constructor (game) {
    super(game, "Rack and Ruin", "World Championship Decks 1999", "WC99");
  }
}

module.exports = RackandRuin;
