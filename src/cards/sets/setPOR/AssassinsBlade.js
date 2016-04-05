"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AssassinsBlade extends UnimplementedCard {
  constructor(game) {
    super(game, "Assassin's Blade", "Portal", "POR");
  }
}

module.exports = AssassinsBlade;
