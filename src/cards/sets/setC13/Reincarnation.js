"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reincarnation extends UnimplementedCard {
  constructor (game) {
    super(game, "Reincarnation", "Commander 2013 Edition", "C13");
  }
}

module.exports = Reincarnation;
