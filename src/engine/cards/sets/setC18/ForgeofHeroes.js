"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForgeofHeroes extends UnimplementedCard {
  constructor (game) {
    super(game, "Forge of Heroes", "Commander 2018", "C18");
  }
}

module.exports = ForgeofHeroes;
