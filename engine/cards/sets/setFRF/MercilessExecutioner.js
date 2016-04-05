"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MercilessExecutioner extends UnimplementedCard {
  constructor(game) {
    super(game, "Merciless Executioner", "Fate Reforged", "FRF");
  }
}

module.exports = MercilessExecutioner;
