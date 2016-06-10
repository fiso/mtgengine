"use strict";
const Constants = require ("../../../Constants");
const FieldofSoulsBase = require("../setDDK/FieldofSouls");

class FieldofSouls extends FieldofSoulsBase {
  constructor (game) {
    super(game, "Field of Souls", "Tempest", "TMP");
  }
}

module.exports = FieldofSouls;
