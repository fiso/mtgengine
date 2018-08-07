"use strict";
const Constants = require ("../../../Constants");
const WitsEndBase = require("../setM13/WitsEnd");

class WitsEnd extends WitsEndBase {
  constructor (game) {
    super(game, "Wit's End", "Dissension", "DIS");
  }
}

module.exports = WitsEnd;
