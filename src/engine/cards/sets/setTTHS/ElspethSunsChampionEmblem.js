"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElspethSunsChampionEmblem extends UnimplementedCard {
  constructor (game) {
    super(game, "Elspeth, Sun's Champion Emblem", "Theros Tokens", "TTHS");
  }
}

module.exports = ElspethSunsChampionEmblem;
