"use strict";
const Constants = require ("../../../Constants");
const PillageBase = require("../setALL/Pillage");

class Pillage extends PillageBase {
  constructor(game) {
    super(game, "Pillage", "Masters Edition II", "ME2");
  }
}

module.exports = Pillage;
