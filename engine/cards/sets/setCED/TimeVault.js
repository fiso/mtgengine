"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimeVault extends Card {
  constructor(game) {
    super(game, "Time Vault", "Collector's Edition", "CED");
  }
}

module.exports = TimeVault;
