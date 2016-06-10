"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofReverence extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Reverence", "Commander 2013 Edition", "C13");
  }
}

module.exports = WallofReverence;
