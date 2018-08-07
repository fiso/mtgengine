"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HerosBlade extends UnimplementedCard {
  constructor (game) {
    super(game, "Hero's Blade", "Commander 2017", "C17");
  }
}

module.exports = HerosBlade;
