"use strict";
const Constants = require ("../../../Constants");
const UnearthBase = require("../setA25/Unearth");

class Unearth extends UnearthBase {
  constructor (game) {
    super(game, "Unearth", "Urza's Legacy", "ULG");
  }
}

module.exports = Unearth;
