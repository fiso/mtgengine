"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BreakthroughBase = require("../setCNS/Breakthrough.js");

class Breakthrough extends BreakthroughBase {
  constructor(game) {
    super(game, "Breakthrough", "Torment", "TOR");
  }
}

module.exports = Breakthrough;
