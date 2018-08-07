"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChampionofWitsToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Champion of Wits Token", "Hour of Devastation Tokens", "THOU");
  }
}

module.exports = ChampionofWitsToken;
