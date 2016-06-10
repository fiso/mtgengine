"use strict";
const Constants = require ("../../../Constants");
const DeathBase = require("../setAPC/Death");

class Death extends DeathBase {
  constructor (game) {
    super(game, "Death", "Friday Night Magic", "pFNM");
  }
}

module.exports = Death;
