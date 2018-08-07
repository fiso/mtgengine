"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalasScout extends UnimplementedCard {
  constructor (game) {
    super(game, "Talas Scout", "Portal Second Age", "P02");
  }
}

module.exports = TalasScout;
