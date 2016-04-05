"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spellskite extends UnimplementedCard {
  constructor(game) {
    super(game, "Spellskite", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Spellskite;
