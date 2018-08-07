"use strict";
const Constants = require ("../../../Constants");
const SteelOverseerBase = require("../setMPS/SteelOverseer");

class SteelOverseer extends SteelOverseerBase {
  constructor (game) {
    super(game, "Steel Overseer", "Magic 2011", "M11");
  }
}

module.exports = SteelOverseer;
