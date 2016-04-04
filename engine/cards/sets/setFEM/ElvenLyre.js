"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvenLyre extends Card {
  constructor(game) {
    super(game, "Elven Lyre", "Fallen Empires", "FEM");
  }
}

module.exports = ElvenLyre;
