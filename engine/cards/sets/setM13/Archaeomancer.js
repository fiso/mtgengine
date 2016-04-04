"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArchaeomancerBase = require("../setDDM/Archaeomancer.js");

class Archaeomancer extends ArchaeomancerBase {
  constructor(game) {
    super(game, "Archaeomancer", "Magic 2013", "M13");
  }
}

module.exports = Archaeomancer;
