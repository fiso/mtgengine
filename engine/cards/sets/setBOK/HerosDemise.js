"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HerosDemise extends Card {
  constructor(game) {
    super(game, "Hero's Demise", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HerosDemise;
