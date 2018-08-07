"use strict";
const Constants = require ("../../../Constants");
const GrizzlyFateBase = require("../setVMA/GrizzlyFate");

class GrizzlyFate extends GrizzlyFateBase {
  constructor (game) {
    super(game, "Grizzly Fate", "Judgment", "JUD");
  }
}

module.exports = GrizzlyFate;
