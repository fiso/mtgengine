"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StreetSpasm extends Card {
  constructor(game) {
    super(game, "Street Spasm", "Commander 2013 Edition", "C13");
  }
}

module.exports = StreetSpasm;
