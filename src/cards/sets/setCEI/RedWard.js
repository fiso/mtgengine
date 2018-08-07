"use strict";
const Constants = require ("../../../Constants");
const RedWardBase = require("../set4ED/RedWard");

class RedWard extends RedWardBase {
  constructor (game) {
    super(game, "Red Ward", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = RedWard;
