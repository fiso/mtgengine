"use strict";
const Constants = require ("../../../Constants");
const PillageBase = require("../setA25/Pillage");

class Pillage extends PillageBase {
  constructor (game) {
    super(game, "Pillage", "Arena League 2000", "PAL00");
  }
}

module.exports = Pillage;
