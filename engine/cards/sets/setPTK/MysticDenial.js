"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MysticDenialBase = require("../setPOR/MysticDenial.js");

class MysticDenial extends MysticDenialBase {
  constructor(game) {
    super(game, "Mystic Denial", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = MysticDenial;
