"use strict";
const Constants = require ("../../../Constants");
const FieldofSoulsBase = require("../setEMA/FieldofSouls");

class FieldofSouls extends FieldofSoulsBase {
  constructor (game) {
    super(game, "Field of Souls", "Tempest Remastered", "TPR");
  }
}

module.exports = FieldofSouls;
