"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FencerClique extends Card {
  constructor(game) {
    super(game, "Fencer Clique", "Morningtide", "MOR");
  }
}

module.exports = FencerClique;
