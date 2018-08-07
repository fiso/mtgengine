"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeepcavernImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Deepcavern Imp", "Modern Masters", "MMA");
  }
}

module.exports = DeepcavernImp;
