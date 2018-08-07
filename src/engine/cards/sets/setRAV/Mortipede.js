"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mortipede extends UnimplementedCard {
  constructor (game) {
    super(game, "Mortipede", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Mortipede;
