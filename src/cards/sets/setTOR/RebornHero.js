"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RebornHero extends UnimplementedCard {
  constructor(game) {
    super(game, "Reborn Hero", "Torment", "TOR");
  }
}

module.exports = RebornHero;
