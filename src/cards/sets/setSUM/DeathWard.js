"use strict";
const Constants = require ("../../../Constants");
const DeathWardBase = require("../setMED/DeathWard");

class DeathWard extends DeathWardBase {
  constructor (game) {
    super(game, "Death Ward", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = DeathWard;
