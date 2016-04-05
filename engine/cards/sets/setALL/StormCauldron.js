"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormCauldron extends UnimplementedCard {
  constructor(game) {
    super(game, "Storm Cauldron", "Alliances", "ALL");
  }
}

module.exports = StormCauldron;
