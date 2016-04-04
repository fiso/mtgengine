"use strict";
const Constants = require ("../../../Constants");
const BackfireBase = require("../set4ED/Backfire");

class Backfire extends BackfireBase {
  constructor(game) {
    super(game, "Backfire", "Legends", "LEG");
  }
}

module.exports = Backfire;
