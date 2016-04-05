"use strict";
const Constants = require ("../../../Constants");
const GiantCockroachBase = require("../set8ED/GiantCockroach");

class GiantCockroach extends GiantCockroachBase {
  constructor(game) {
    super(game, "Giant Cockroach", "Ninth Edition", "9ED");
  }
}

module.exports = GiantCockroach;
