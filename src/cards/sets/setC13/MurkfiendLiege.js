"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MurkfiendLiege extends UnimplementedCard {
  constructor (game) {
    super(game, "Murkfiend Liege", "Commander 2013 Edition", "C13");
  }
}

module.exports = MurkfiendLiege;
