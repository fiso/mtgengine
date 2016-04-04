"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishArchers extends Card {
  constructor(game) {
    super(game, "Elvish Archers", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ElvishArchers;
