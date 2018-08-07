"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JungleShrine extends UnimplementedCard {
  constructor (game) {
    super(game, "Jungle Shrine", "Explorers of Ixalan", "E02");
  }
}

module.exports = JungleShrine;
