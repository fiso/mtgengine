"use strict";
const Constants = require ("../../../Constants");
const BlackWardBase = require("../setCED/BlackWard");

class BlackWard extends BlackWardBase {
  constructor(game) {
    super(game, "Black Ward", "Limited Edition Beta", "LEB");
  }
}

module.exports = BlackWard;
