"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JungleShrine extends Card {
  constructor(game) {
    super(game, "Jungle Shrine", "Commander 2013 Edition", "C13");
  }
}

module.exports = JungleShrine;
