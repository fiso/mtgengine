"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeepcavernImp extends Card {
  constructor(game) {
    super(game, "Deepcavern Imp", "Future Sight", "FUT");
  }
}

module.exports = DeepcavernImp;
