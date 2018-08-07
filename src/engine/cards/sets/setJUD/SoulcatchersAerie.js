"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulcatchersAerie extends UnimplementedCard {
  constructor (game) {
    super(game, "Soulcatchers' Aerie", "Judgment", "JUD");
  }
}

module.exports = SoulcatchersAerie;
