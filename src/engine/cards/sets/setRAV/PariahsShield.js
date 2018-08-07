"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PariahsShield extends UnimplementedCard {
  constructor (game) {
    super(game, "Pariah's Shield", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = PariahsShield;
