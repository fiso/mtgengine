"use strict";
const Constants = require ("../../../Constants");
const PillageBase = require("../setALL/Pillage");

class Pillage extends PillageBase {
  constructor(game) {
    super(game, "Pillage", "Deckmasters", "DKM");
  }
}

module.exports = Pillage;
