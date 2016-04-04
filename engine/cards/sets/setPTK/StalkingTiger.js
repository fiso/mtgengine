"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StalkingTigerBase = require("../set6ED/StalkingTiger.js");

class StalkingTiger extends StalkingTigerBase {
  constructor(game) {
    super(game, "Stalking Tiger", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = StalkingTiger;
