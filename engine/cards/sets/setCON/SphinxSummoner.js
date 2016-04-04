"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SphinxSummoner extends Card {
  constructor(game) {
    super(game, "Sphinx Summoner", "Conflux", "CON");
  }
}

module.exports = SphinxSummoner;
