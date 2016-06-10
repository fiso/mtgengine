"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReleasetheAnts extends UnimplementedCard {
  constructor (game) {
    super(game, "Release the Ants", "Morningtide", "MOR");
  }
}

module.exports = ReleasetheAnts;
