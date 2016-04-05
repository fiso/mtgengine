"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LlanowarAugur extends UnimplementedCard {
  constructor(game) {
    super(game, "Llanowar Augur", "Future Sight", "FUT");
  }
}

module.exports = LlanowarAugur;
