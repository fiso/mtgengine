"use strict";
const Constants = require ("../../../Constants");
const GiantCockroachBase = require("../set9ED/GiantCockroach");

class GiantCockroach extends GiantCockroachBase {
  constructor (game) {
    super(game, "Giant Cockroach", "Eighth Edition", "8ED");
  }
}

module.exports = GiantCockroach;
