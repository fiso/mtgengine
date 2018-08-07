"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DraconianCylix extends UnimplementedCard {
  constructor (game) {
    super(game, "Draconian Cylix", "Fallen Empires", "FEM");
  }
}

module.exports = DraconianCylix;
