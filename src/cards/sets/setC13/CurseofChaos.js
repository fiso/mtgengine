"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CurseofChaos extends UnimplementedCard {
  constructor (game) {
    super(game, "Curse of Chaos", "Commander 2013 Edition", "C13");
  }
}

module.exports = CurseofChaos;
