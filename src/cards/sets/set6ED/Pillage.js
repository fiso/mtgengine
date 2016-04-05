"use strict";
const Constants = require ("../../../Constants");
const PillageBase = require("../setALL/Pillage");

class Pillage extends PillageBase {
  constructor(game) {
    super(game, "Pillage", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Pillage;
