"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChampionofWits extends UnimplementedCard {
  constructor (game) {
    super(game, "Champion of Wits", "Hour of Devastation", "HOU");
  }
}

module.exports = ChampionofWits;
