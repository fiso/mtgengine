"use strict";
const Constants = require ("../../../Constants");
const SiftThroughSandsBase = require("../setDDS/SiftThroughSands");

class SiftThroughSands extends SiftThroughSandsBase {
  constructor (game) {
    super(game, "Sift Through Sands", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SiftThroughSands;
