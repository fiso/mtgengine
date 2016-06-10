"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggAssassin extends UnimplementedCard {
  constructor (game) {
    super(game, "Mogg Assassin", "Exodus", "EXO");
  }
}

module.exports = MoggAssassin;
