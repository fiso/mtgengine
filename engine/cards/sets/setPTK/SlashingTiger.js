"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SlashingTigerBase = require("../setME3/SlashingTiger.js");

class SlashingTiger extends SlashingTigerBase {
  constructor(game) {
    super(game, "Slashing Tiger", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = SlashingTiger;
