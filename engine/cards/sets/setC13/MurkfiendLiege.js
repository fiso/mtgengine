"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MurkfiendLiege extends Card {
  constructor(game) {
    super(game, "Murkfiend Liege", "Commander 2013 Edition", "C13");
  }
}

module.exports = MurkfiendLiege;
