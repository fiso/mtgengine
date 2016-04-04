"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WitsEndBase = require("../setDIS/WitsEnd.js");

class WitsEnd extends WitsEndBase {
  constructor(game) {
    super(game, "Wit's End", "Magic 2013", "M13");
  }
}

module.exports = WitsEnd;
