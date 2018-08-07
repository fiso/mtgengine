"use strict";
const Constants = require ("../../../Constants");
const DeathWardBase = require("../setMED/DeathWard");

class DeathWard extends DeathWardBase {
  constructor (game) {
    super(game, "Death Ward", "Collectors’ Edition", "CED");
  }
}

module.exports = DeathWard;
