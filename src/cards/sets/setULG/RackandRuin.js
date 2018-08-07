"use strict";
const Constants = require ("../../../Constants");
const RackandRuinBase = require("../setWC00/RackandRuin");

class RackandRuin extends RackandRuinBase {
  constructor (game) {
    super(game, "Rack and Ruin", "Urza's Legacy", "ULG");
  }
}

module.exports = RackandRuin;
