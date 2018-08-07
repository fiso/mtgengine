"use strict";
const Constants = require ("../../../Constants");
const SavannahLionsBase = require("../setA25/SavannahLions");

class SavannahLions extends SavannahLionsBase {
  constructor (game) {
    super(game, "Savannah Lions", "Limited Edition Beta", "LEB");
  }
}

module.exports = SavannahLions;
