"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrawGolem extends Card {
  constructor(game) {
    super(game, "Straw Golem", "Weatherlight", "WTH");
  }
}

module.exports = StrawGolem;
