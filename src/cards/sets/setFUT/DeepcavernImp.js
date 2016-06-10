"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeepcavernImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Deepcavern Imp", "Future Sight", "FUT");
  }
}

module.exports = DeepcavernImp;
