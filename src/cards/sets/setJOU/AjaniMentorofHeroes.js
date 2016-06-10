"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AjaniMentorofHeroes extends UnimplementedCard {
  constructor (game) {
    super(game, "Ajani, Mentor of Heroes", "Journey into Nyx", "JOU");
  }
}

module.exports = AjaniMentorofHeroes;
