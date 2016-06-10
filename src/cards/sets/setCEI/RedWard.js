"use strict";
const Constants = require ("../../../Constants");
const RedWardBase = require("../setCED/RedWard");

class RedWard extends RedWardBase {
  constructor (game) {
    super(game, "Red Ward", "International Collector's Edition", "CEI");
  }
}

module.exports = RedWard;
