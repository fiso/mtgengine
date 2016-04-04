"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AjaniMentorofHeroes extends Card {
  constructor(game) {
    super(game, "Ajani, Mentor of Heroes", "Journey into Nyx", "JOU");
  }
}

module.exports = AjaniMentorofHeroes;
