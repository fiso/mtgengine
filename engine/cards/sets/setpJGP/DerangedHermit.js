"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DerangedHermit extends Card {
  constructor(game) {
    super(game, "Deranged Hermit", "Judge Gift Program", "pJGP");
  }
}

module.exports = DerangedHermit;
