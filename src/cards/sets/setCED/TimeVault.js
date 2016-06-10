"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeVault extends UnimplementedCard {
  constructor (game) {
    super(game, "Time Vault", "Collector's Edition", "CED");
  }
}

module.exports = TimeVault;
