"use strict";
const Constants = require ("../../../Constants");
const CruelRevivalBase = require("../setORI/CruelRevival");

class CruelRevival extends CruelRevivalBase {
  constructor (game) {
    super(game, "Cruel Revival", "Onslaught", "ONS");
  }
}

module.exports = CruelRevival;
