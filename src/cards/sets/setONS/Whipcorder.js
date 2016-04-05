"use strict";
const Constants = require ("../../../Constants");
const WhipcorderBase = require("../setpFNM/Whipcorder");

class Whipcorder extends WhipcorderBase {
  constructor(game) {
    super(game, "Whipcorder", "Onslaught", "ONS");
  }
}

module.exports = Whipcorder;
