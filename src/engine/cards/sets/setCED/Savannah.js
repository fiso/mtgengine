"use strict";
const Constants = require ("../../../Constants");
const SavannahBase = require("../setVMA/Savannah");

class Savannah extends SavannahBase {
  constructor (game) {
    super(game, "Savannah", "Collectors’ Edition", "CED");
  }
}

module.exports = Savannah;
