"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IntrepidHeroBase = require("../set8ED/IntrepidHero.js");

class IntrepidHero extends IntrepidHeroBase {
  constructor(game) {
    super(game, "Intrepid Hero", "Urza's Saga", "USG");
  }
}

module.exports = IntrepidHero;
