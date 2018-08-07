"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishScout extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Scout", "Fallen Empires", "FEM");
  }
}

module.exports = ElvishScout;
