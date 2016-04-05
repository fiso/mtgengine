"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishHunter extends UnimplementedCard {
  constructor(game) {
    super(game, "Elvish Hunter", "Fallen Empires", "FEM");
  }
}

module.exports = ElvishHunter;
