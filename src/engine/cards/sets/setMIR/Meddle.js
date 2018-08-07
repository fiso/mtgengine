"use strict";
const Constants = require ("../../../Constants");
const MeddleBase = require("../setONS/Meddle");

class Meddle extends MeddleBase {
  constructor (game) {
    super(game, "Meddle", "Mirage", "MIR");
  }
}

module.exports = Meddle;
