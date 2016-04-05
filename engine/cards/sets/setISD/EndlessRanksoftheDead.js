"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EndlessRanksoftheDead extends UnimplementedCard {
  constructor(game) {
    super(game, "Endless Ranks of the Dead", "Innistrad", "ISD");
  }
}

module.exports = EndlessRanksoftheDead;
