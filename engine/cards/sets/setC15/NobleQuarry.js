"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NobleQuarryBase = require("../setBNG/NobleQuarry.js");

class NobleQuarry extends NobleQuarryBase {
  constructor(game) {
    super(game, "Noble Quarry", "Commander 2015", "C15");
  }
}

module.exports = NobleQuarry;
