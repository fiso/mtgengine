"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DraconianCylix extends Card {
  constructor(game) {
    super(game, "Draconian Cylix", "Fallen Empires", "FEM");
  }
}

module.exports = DraconianCylix;
