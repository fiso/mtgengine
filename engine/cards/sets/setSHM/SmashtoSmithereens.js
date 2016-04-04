"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SmashtoSmithereensBase = require("../setORI/SmashtoSmithereens.js");

class SmashtoSmithereens extends SmashtoSmithereensBase {
  constructor(game) {
    super(game, "Smash to Smithereens", "Shadowmoor", "SHM");
  }
}

module.exports = SmashtoSmithereens;
