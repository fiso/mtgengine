"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FascistArtDirector extends Card {
  constructor(game) {
    super(game, "Fascist Art Director", "Unhinged", "UNH");
  }
}

module.exports = FascistArtDirector;
