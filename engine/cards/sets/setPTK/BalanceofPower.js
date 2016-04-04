"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BalanceofPowerBase = require("../set8ED/BalanceofPower.js");

class BalanceofPower extends BalanceofPowerBase {
  constructor(game) {
    super(game, "Balance of Power", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = BalanceofPower;
