"use strict";
const Constants = require ("../../../Constants");
const RedWardBase = require("../setCED/RedWard");

class RedWard extends RedWardBase {
  constructor(game) {
    super(game, "Red Ward", "Limited Edition Beta", "LEB");
  }
}

module.exports = RedWard;
