"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaFlare extends UnimplementedCard {
  constructor(game) {
    super(game, "Mana Flare", "Collector's Edition", "CED");
  }
}

module.exports = ManaFlare;
