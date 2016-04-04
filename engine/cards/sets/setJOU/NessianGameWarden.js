"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NessianGameWarden extends Card {
  constructor(game) {
    super(game, "Nessian Game Warden", "Journey into Nyx", "JOU");
  }
}

module.exports = NessianGameWarden;
