"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LlanowarEmpath extends UnimplementedCard {
  constructor(game) {
    super(game, "Llanowar Empath", "Future Sight", "FUT");
  }
}

module.exports = LlanowarEmpath;
