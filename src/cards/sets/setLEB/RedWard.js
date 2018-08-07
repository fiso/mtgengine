"use strict";
const Constants = require ("../../../Constants");
const RedWardBase = require("../set4ED/RedWard");

class RedWard extends RedWardBase {
  constructor (game) {
    super(game, "Red Ward", "Limited Edition Beta", "LEB");
  }
}

module.exports = RedWard;
