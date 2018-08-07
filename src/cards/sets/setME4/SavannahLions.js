"use strict";
const Constants = require ("../../../Constants");
const SavannahLionsBase = require("../setA25/SavannahLions");

class SavannahLions extends SavannahLionsBase {
  constructor (game) {
    super(game, "Savannah Lions", "Masters Edition IV", "ME4");
  }
}

module.exports = SavannahLions;
