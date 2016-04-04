"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RankandFile extends Card {
  constructor(game) {
    super(game, "Rank and File", "Urza's Legacy", "ULG");
  }
}

module.exports = RankandFile;
