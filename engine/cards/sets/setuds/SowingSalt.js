"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SowingSaltBase = require("../setBOK/SowingSalt.js");

class SowingSalt extends SowingSaltBase {
  constructor(game) {
    super(game, "Sowing Salt", "Urza's Destiny", "UDS");
  }
}

module.exports = SowingSalt;
