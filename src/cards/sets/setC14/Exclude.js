"use strict";
const Constants = require ("../../../Constants");
const ExcludeBase = require("../setA25/Exclude");

class Exclude extends ExcludeBase {
  constructor (game) {
    super(game, "Exclude", "Commander 2014", "C14");
  }
}

module.exports = Exclude;
