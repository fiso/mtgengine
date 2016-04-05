"use strict";
const Constants = require ("../../../Constants");
const BreakthroughBase = require("../setCNS/Breakthrough");

class Breakthrough extends BreakthroughBase {
  constructor(game) {
    super(game, "Breakthrough", "Torment", "TOR");
  }
}

module.exports = Breakthrough;
