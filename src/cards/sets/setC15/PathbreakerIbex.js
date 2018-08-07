"use strict";
const Constants = require ("../../../Constants");
const PathbreakerIbexBase = require("../setCMA/PathbreakerIbex");

class PathbreakerIbex extends PathbreakerIbexBase {
  constructor (game) {
    super(game, "Pathbreaker Ibex", "Commander 2015", "C15");
  }
}

module.exports = PathbreakerIbex;
