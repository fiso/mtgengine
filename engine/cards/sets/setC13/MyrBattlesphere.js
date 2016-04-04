"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MyrBattlesphere extends Card {
  constructor(game) {
    super(game, "Myr Battlesphere", "Commander 2013 Edition", "C13");
  }
}

module.exports = MyrBattlesphere;
