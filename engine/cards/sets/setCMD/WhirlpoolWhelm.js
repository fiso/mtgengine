"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhirlpoolWhelmBase = require("../setLRW/WhirlpoolWhelm.js");

class WhirlpoolWhelm extends WhirlpoolWhelmBase {
  constructor(game) {
    super(game, "Whirlpool Whelm", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = WhirlpoolWhelm;
