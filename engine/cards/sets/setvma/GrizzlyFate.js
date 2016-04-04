"use strict";
const Constants = require ("../../../Constants");
const GrizzlyFateBase = require("../setJUD/GrizzlyFate");

class GrizzlyFate extends GrizzlyFateBase {
  constructor(game) {
    super(game, "Grizzly Fate", "Vintage Masters", "VMA");
  }
}

module.exports = GrizzlyFate;
