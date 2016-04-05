"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChubToad extends UnimplementedCard {
  constructor(game) {
    super(game, "Chub Toad", "Fifth Edition", "5ED");
  }
}

module.exports = ChubToad;
