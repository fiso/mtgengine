"use strict";
const Constants = require ("../../../Constants");
const HorseshoeCrabBase = require("../set10E/HorseshoeCrab");

class HorseshoeCrab extends HorseshoeCrabBase {
  constructor (game) {
    super(game, "Horseshoe Crab", "Urza's Saga", "USG");
  }
}

module.exports = HorseshoeCrab;
