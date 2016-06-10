"use strict";
const Constants = require ("../../../Constants");
const SavannahLionsBase = require("../setCED/SavannahLions");

class SavannahLions extends SavannahLionsBase {
  constructor (game) {
    super(game, "Savannah Lions", "International Collector's Edition", "CEI");
  }
}

module.exports = SavannahLions;
