"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rukh extends UnimplementedCard {
  constructor (game) {
    super(game, "Rukh", "Magic Player Rewards 2003", "P03");
  }
}

module.exports = Rukh;
