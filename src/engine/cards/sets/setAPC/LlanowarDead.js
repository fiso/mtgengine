"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LlanowarDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Llanowar Dead", "Apocalypse", "APC");
  }
}

module.exports = LlanowarDead;
