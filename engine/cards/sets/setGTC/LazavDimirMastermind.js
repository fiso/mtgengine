"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LazavDimirMastermind extends UnimplementedCard {
  constructor(game) {
    super(game, "Lazav, Dimir Mastermind", "Gatecrash", "GTC");
  }
}

module.exports = LazavDimirMastermind;
