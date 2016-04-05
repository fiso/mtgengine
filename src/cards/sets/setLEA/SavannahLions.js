"use strict";
const Constants = require ("../../../Constants");
const SavannahLionsBase = require("../setCED/SavannahLions");

class SavannahLions extends SavannahLionsBase {
  constructor(game) {
    super(game, "Savannah Lions", "Limited Edition Alpha", "LEA");
  }
}

module.exports = SavannahLions;
