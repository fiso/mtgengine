"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ApprenticeNecromancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Apprentice Necromancer", "Commander 2017", "C17");
  }
}

module.exports = ApprenticeNecromancer;
