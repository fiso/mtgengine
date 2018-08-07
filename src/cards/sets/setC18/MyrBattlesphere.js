"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrBattlesphere extends UnimplementedCard {
  constructor (game) {
    super(game, "Myr Battlesphere", "Commander 2018", "C18");
  }
}

module.exports = MyrBattlesphere;
