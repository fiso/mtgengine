"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiantCockroachBase = require("../set8ED/GiantCockroach.js");

class GiantCockroach extends GiantCockroachBase {
  constructor(game) {
    super(game, "Giant Cockroach", "Seventh Edition", "7ED");
  }
}

module.exports = GiantCockroach;
