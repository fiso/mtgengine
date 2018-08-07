"use strict";
const Constants = require ("../../../Constants");
const MassacreBase = require("../setTD0/Massacre");

class Massacre extends MassacreBase {
  constructor (game) {
    super(game, "Massacre", "Nemesis", "NEM");
  }
}

module.exports = Massacre;
