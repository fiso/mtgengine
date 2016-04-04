"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelicChorus extends Card {
  constructor(game) {
    super(game, "Angelic Chorus", "Tenth Edition", "10E");
  }
}

module.exports = AngelicChorus;
