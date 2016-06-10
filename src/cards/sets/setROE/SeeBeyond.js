"use strict";
const Constants = require ("../../../Constants");
const SeeBeyondBase = require("../setPC2/SeeBeyond");

class SeeBeyond extends SeeBeyondBase {
  constructor (game) {
    super(game, "See Beyond", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SeeBeyond;
