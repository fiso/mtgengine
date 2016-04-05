"use strict";
const Constants = require ("../../../Constants");
const MysticDenialBase = require("../setPOR/MysticDenial");

class MysticDenial extends MysticDenialBase {
  constructor(game) {
    super(game, "Mystic Denial", "Portal Second Age", "PO2");
  }
}

module.exports = MysticDenial;
