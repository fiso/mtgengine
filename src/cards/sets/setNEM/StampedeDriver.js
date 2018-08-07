"use strict";
const Constants = require ("../../../Constants");
const StampedeDriverBase = require("../setA25/StampedeDriver");

class StampedeDriver extends StampedeDriverBase {
  constructor (game) {
    super(game, "Stampede Driver", "Nemesis", "NEM");
  }
}

module.exports = StampedeDriver;
