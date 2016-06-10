"use strict";
const Constants = require ("../../../Constants");
const WitsEndBase = require("../setDIS/WitsEnd");

class WitsEnd extends WitsEndBase {
  constructor (game) {
    super(game, "Wit's End", "Magic 2013", "M13");
  }
}

module.exports = WitsEnd;
