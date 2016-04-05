"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SphinxSummoner extends UnimplementedCard {
  constructor(game) {
    super(game, "Sphinx Summoner", "Conflux", "CON");
  }
}

module.exports = SphinxSummoner;
