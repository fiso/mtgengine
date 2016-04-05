"use strict";
const Constants = require ("../../../Constants");
const ShamblingShellBase = require("../setDDJ/ShamblingShell");

class ShamblingShell extends ShamblingShellBase {
  constructor(game) {
    super(game, "Shambling Shell", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ShamblingShell;
