"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntingWilds extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunting Wilds", "Commander 2018", "C18");
  }
}

module.exports = HuntingWilds;
