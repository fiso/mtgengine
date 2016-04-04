"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShamblingShellBase = require("../setDDJ/ShamblingShell.js");

class ShamblingShell extends ShamblingShellBase {
  constructor(game) {
    super(game, "Shambling Shell", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ShamblingShell;
