"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofReverence extends Card {
  constructor(game) {
    super(game, "Wall of Reverence", "Commander 2013 Edition", "C13");
  }
}

module.exports = WallofReverence;
