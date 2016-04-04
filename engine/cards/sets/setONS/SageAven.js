"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SageAvenBase = require("../set9ED/SageAven.js");

class SageAven extends SageAvenBase {
  constructor(game) {
    super(game, "Sage Aven", "Onslaught", "ONS");
  }
}

module.exports = SageAven;
