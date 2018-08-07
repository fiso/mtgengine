"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SphinxSummoner extends UnimplementedCard {
  constructor (game) {
    super(game, "Sphinx Summoner", "Commander 2016", "C16");
  }
}

module.exports = SphinxSummoner;
