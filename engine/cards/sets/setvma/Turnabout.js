"use strict";
const Constants = require ("../../../Constants");
const TurnaboutBase = require("../setpMEI/Turnabout");

class Turnabout extends TurnaboutBase {
  constructor(game) {
    super(game, "Turnabout", "Vintage Masters", "VMA");
  }
}

module.exports = Turnabout;
