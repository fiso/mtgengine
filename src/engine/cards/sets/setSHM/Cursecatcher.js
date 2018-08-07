"use strict";
const Constants = require ("../../../Constants");
const CursecatcherBase = require("../setA25/Cursecatcher");

class Cursecatcher extends CursecatcherBase {
  constructor (game) {
    super(game, "Cursecatcher", "Shadowmoor", "SHM");
  }
}

module.exports = Cursecatcher;
