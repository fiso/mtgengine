"use strict";
const Constants = require ("../../../Constants");
const PathbreakerIbexBase = require("../setCMA/PathbreakerIbex");

class PathbreakerIbex extends PathbreakerIbexBase {
  constructor (game) {
    super(game, "Pathbreaker Ibex", "Legendary Cube", "PZ1");
  }
}

module.exports = PathbreakerIbex;
