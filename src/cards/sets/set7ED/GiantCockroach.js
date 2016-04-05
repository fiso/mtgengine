"use strict";
const Constants = require ("../../../Constants");
const GiantCockroachBase = require("../set8ED/GiantCockroach");

class GiantCockroach extends GiantCockroachBase {
  constructor(game) {
    super(game, "Giant Cockroach", "Seventh Edition", "7ED");
  }
}

module.exports = GiantCockroach;
