"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrBattlesphere extends UnimplementedCard {
  constructor (game) {
    super(game, "Myr Battlesphere", "Commander 2013 Edition", "C13");
  }
}

module.exports = MyrBattlesphere;
