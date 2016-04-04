"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LazavDimirMastermind extends Card {
  constructor(game) {
    super(game, "Lazav, Dimir Mastermind", "Gatecrash", "GTC");
  }
}

module.exports = LazavDimirMastermind;
