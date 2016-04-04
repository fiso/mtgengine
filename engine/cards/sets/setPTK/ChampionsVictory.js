"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChampionsVictory extends UnimplementedCard {
  constructor(game) {
    super(game, "Champion's Victory", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ChampionsVictory;
