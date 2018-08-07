"use strict";
const Constants = require ("../../../Constants");
const AlbinoTrollBase = require("../setGVL/AlbinoTroll");

class AlbinoTroll extends AlbinoTrollBase {
  constructor (game) {
    super(game, "Albino Troll", "Urza's Saga", "USG");
  }
}

module.exports = AlbinoTroll;
