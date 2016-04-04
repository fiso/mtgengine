"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Annex extends Card {
  constructor(game) {
    super(game, "Annex", "Ninth Edition", "9ED");
  }
}

module.exports = Annex;
