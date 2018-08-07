"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcaneEncyclopedia extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcane Encyclopedia", "Core Set 2019", "M19");
  }
}

module.exports = ArcaneEncyclopedia;
