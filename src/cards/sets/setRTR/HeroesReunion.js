"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeroesReunion extends UnimplementedCard {
  constructor (game) {
    super(game, "Heroes' Reunion", "Return to Ravnica", "RTR");
  }
}

module.exports = HeroesReunion;
