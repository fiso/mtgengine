"use strict";
const Constants = require ("../../../Constants");
const SavannahLionsBase = require("../setA25/SavannahLions");

class SavannahLions extends SavannahLionsBase {
  constructor (game) {
    super(game, "Savannah Lions", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = SavannahLions;
