"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YawgmothsWill extends Card {
  constructor(game) {
    super(game, "Yawgmoth's Will", "Judge Gift Program", "pJGP");
  }
}

module.exports = YawgmothsWill;
