"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YawgmothsWill extends UnimplementedCard {
  constructor(game) {
    super(game, "Yawgmoth's Will", "Judge Gift Program", "pJGP");
  }
}

module.exports = YawgmothsWill;
