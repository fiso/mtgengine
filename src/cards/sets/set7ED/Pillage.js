"use strict";
const Constants = require ("../../../Constants");
const PillageBase = require("../setALL/Pillage");

class Pillage extends PillageBase {
  constructor (game) {
    super(game, "Pillage", "Seventh Edition", "7ED");
  }
}

module.exports = Pillage;
