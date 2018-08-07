"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreamFighter extends UnimplementedCard {
  constructor (game) {
    super(game, "Dream Fighter", "Mirage", "MIR");
  }
}

module.exports = DreamFighter;
