"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FascistArtDirector extends UnimplementedCard {
  constructor(game) {
    super(game, "Fascist Art Director", "Unhinged", "UNH");
  }
}

module.exports = FascistArtDirector;
