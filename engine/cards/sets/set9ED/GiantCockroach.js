"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiantCockroachBase = require("../set8ED/GiantCockroach.js");

class GiantCockroach extends GiantCockroachBase {
  constructor(game) {
    super(game, "Giant Cockroach", "Ninth Edition", "9ED");
  }
}

module.exports = GiantCockroach;
