"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacrificePlay extends UnimplementedCard {
  constructor (game) {
    super(game, "Sacrifice Play", "Unstable", "UST");
  }
}

module.exports = SacrificePlay;
