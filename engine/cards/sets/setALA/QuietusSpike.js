"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const QuietusSpikeBase = require("../setPC2/QuietusSpike.js");

class QuietusSpike extends QuietusSpikeBase {
  constructor(game) {
    super(game, "Quietus Spike", "Shards of Alara", "ALA");
  }
}

module.exports = QuietusSpike;
