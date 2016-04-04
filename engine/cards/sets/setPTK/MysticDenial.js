"use strict";
const Constants = require ("../../../Constants");
const MysticDenialBase = require("../setPOR/MysticDenial");

class MysticDenial extends MysticDenialBase {
  constructor(game) {
    super(game, "Mystic Denial", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = MysticDenial;
