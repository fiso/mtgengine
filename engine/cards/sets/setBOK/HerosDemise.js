"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HerosDemise extends UnimplementedCard {
  constructor(game) {
    super(game, "Hero's Demise", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HerosDemise;
