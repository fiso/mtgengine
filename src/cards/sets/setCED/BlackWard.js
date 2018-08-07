"use strict";
const Constants = require ("../../../Constants");
const BlackWardBase = require("../set4ED/BlackWard");

class BlackWard extends BlackWardBase {
  constructor (game) {
    super(game, "Black Ward", "Collectors’ Edition", "CED");
  }
}

module.exports = BlackWard;
