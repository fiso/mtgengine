"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HalloftheBanditLord extends UnimplementedCard {
  constructor (game) {
    super(game, "Hall of the Bandit Lord", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HalloftheBanditLord;
