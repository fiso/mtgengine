"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RankandFile extends UnimplementedCard {
  constructor (game) {
    super(game, "Rank and File", "Urza's Legacy", "ULG");
  }
}

module.exports = RankandFile;
