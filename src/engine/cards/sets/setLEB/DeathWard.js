"use strict";
const Constants = require ("../../../Constants");
const DeathWardBase = require("../setMED/DeathWard");

class DeathWard extends DeathWardBase {
  constructor (game) {
    super(game, "Death Ward", "Limited Edition Beta", "LEB");
  }
}

module.exports = DeathWard;
