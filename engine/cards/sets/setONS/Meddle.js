"use strict";
const Constants = require ("../../../Constants");
const MeddleBase = require("../setMIR/Meddle");

class Meddle extends MeddleBase {
  constructor(game) {
    super(game, "Meddle", "Onslaught", "ONS");
  }
}

module.exports = Meddle;
