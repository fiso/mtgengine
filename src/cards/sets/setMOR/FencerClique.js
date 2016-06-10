"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FencerClique extends UnimplementedCard {
  constructor (game) {
    super(game, "Fencer Clique", "Morningtide", "MOR");
  }
}

module.exports = FencerClique;
