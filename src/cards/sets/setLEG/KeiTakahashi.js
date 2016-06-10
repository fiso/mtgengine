"use strict";
const Constants = require ("../../../Constants");
const KeiTakahashiBase = require("../setCHR/KeiTakahashi");

class KeiTakahashi extends KeiTakahashiBase {
  constructor (game) {
    super(game, "Kei Takahashi", "Legends", "LEG");
  }
}

module.exports = KeiTakahashi;
