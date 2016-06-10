"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LlanowarWastes extends UnimplementedCard {
  constructor (game) {
    super(game, "Llanowar Wastes", "Apocalypse", "APC");
  }
}

module.exports = LlanowarWastes;
