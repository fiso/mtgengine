"use strict";
const Constants = require ("../../../Constants");
const AlbinoTrollBase = require("../setGVL/AlbinoTroll");

class AlbinoTroll extends AlbinoTrollBase {
  constructor (game) {
    super(game, "Albino Troll", "Magic Online Promos", "PRM");
  }
}

module.exports = AlbinoTroll;
