"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SecretSummoning extends UnimplementedCard {
  constructor (game) {
    super(game, "Secret Summoning", "Conspiracy", "CNS");
  }
}

module.exports = SecretSummoning;
