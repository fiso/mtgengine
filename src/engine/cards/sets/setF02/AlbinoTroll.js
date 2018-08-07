"use strict";
const Constants = require ("../../../Constants");
const AlbinoTrollBase = require("../setGVL/AlbinoTroll");

class AlbinoTroll extends AlbinoTrollBase {
  constructor (game) {
    super(game, "Albino Troll", "Friday Night Magic 2002", "F02");
  }
}

module.exports = AlbinoTroll;
