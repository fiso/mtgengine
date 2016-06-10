"use strict";
const Constants = require ("../../../Constants");
const DeathWardBase = require("../setCED/DeathWard");

class DeathWard extends DeathWardBase {
  constructor (game) {
    super(game, "Death Ward", "Masters Edition", "MED");
  }
}

module.exports = DeathWard;
