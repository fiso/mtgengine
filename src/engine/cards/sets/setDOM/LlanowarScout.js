"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LlanowarScout extends UnimplementedCard {
  constructor (game) {
    super(game, "Llanowar Scout", "Dominaria", "DOM");
  }
}

module.exports = LlanowarScout;
