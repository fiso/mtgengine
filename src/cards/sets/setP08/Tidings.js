"use strict";
const Constants = require ("../../../Constants");
const TidingsBase = require("../setC18/Tidings");

class Tidings extends TidingsBase {
  constructor (game) {
    super(game, "Tidings", "Magic Player Rewards 2008", "P08");
  }
}

module.exports = Tidings;
