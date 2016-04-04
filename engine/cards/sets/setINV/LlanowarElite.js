"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LlanowarElite extends UnimplementedCard {
  constructor(game) {
    super(game, "Llanowar Elite", "Invasion", "INV");
  }
}

module.exports = LlanowarElite;
