"use strict";
const Constants = require ("../../../Constants");
const BalothCageTrapBase = require("../setMM3/BalothCageTrap");

class BalothCageTrap extends BalothCageTrapBase {
  constructor (game) {
    super(game, "Baloth Cage Trap", "Zendikar", "ZEN");
  }
}

module.exports = BalothCageTrap;
