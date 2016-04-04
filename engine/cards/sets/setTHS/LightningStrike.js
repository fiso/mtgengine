"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LightningStrikeBase = require("../setM15/LightningStrike.js");

class LightningStrike extends LightningStrikeBase {
  constructor(game) {
    super(game, "Lightning Strike", "Theros", "THS");
  }
}

module.exports = LightningStrike;
