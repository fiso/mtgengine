"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TemporalAdeptBase = require("../set8ED/TemporalAdept.js");

class TemporalAdept extends TemporalAdeptBase {
  constructor(game) {
    super(game, "Temporal Adept", "Urza's Destiny", "UDS");
  }
}

module.exports = TemporalAdept;
