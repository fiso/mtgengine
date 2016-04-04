"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrostanisSummoner extends UnimplementedCard {
  constructor(game) {
    super(game, "Trostani's Summoner", "Dragon's Maze", "DGM");
  }
}

module.exports = TrostanisSummoner;
