"use strict";
const Constants = require ("../../../Constants");
const SavannahLionsBase = require("../setA25/SavannahLions");

class SavannahLions extends SavannahLionsBase {
  constructor (game) {
    super(game, "Savannah Lions", "Ninth Edition", "9ED");
  }
}

module.exports = SavannahLions;
