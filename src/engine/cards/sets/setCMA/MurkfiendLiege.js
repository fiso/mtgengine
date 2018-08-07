"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MurkfiendLiege extends UnimplementedCard {
  constructor (game) {
    super(game, "Murkfiend Liege", "Commander Anthology", "CMA");
  }
}

module.exports = MurkfiendLiege;
