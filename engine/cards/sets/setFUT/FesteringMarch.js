"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FesteringMarch extends UnimplementedCard {
  constructor(game) {
    super(game, "Festering March", "Future Sight", "FUT");
  }
}

module.exports = FesteringMarch;
