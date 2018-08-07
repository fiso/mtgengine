"use strict";
const Constants = require ("../../../Constants");
const CruelRevivalBase = require("../setORI/CruelRevival");

class CruelRevival extends CruelRevivalBase {
  constructor (game) {
    super(game, "Cruel Revival", "Planechase", "HOP");
  }
}

module.exports = CruelRevival;
