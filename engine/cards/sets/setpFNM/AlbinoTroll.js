"use strict";
const Constants = require ("../../../Constants");
const AlbinoTrollBase = require("../setDD3_GVL/AlbinoTroll");

class AlbinoTroll extends AlbinoTrollBase {
  constructor(game) {
    super(game, "Albino Troll", "Friday Night Magic", "pFNM");
  }
}

module.exports = AlbinoTroll;
