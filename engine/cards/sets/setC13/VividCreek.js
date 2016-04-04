"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VividCreek extends Card {
  constructor(game) {
    super(game, "Vivid Creek", "Commander 2013 Edition", "C13");
  }
}

module.exports = VividCreek;
