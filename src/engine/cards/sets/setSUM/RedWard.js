"use strict";
const Constants = require ("../../../Constants");
const RedWardBase = require("../set4ED/RedWard");

class RedWard extends RedWardBase {
  constructor (game) {
    super(game, "Red Ward", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = RedWard;
