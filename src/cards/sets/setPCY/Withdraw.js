"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Withdraw extends UnimplementedCard {
  constructor (game) {
    super(game, "Withdraw", "Prophecy", "PCY");
  }
}

module.exports = Withdraw;
