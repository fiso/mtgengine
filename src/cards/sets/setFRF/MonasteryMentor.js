"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MonasteryMentor extends UnimplementedCard {
  constructor (game) {
    super(game, "Monastery Mentor", "Fate Reforged", "FRF");
  }
}

module.exports = MonasteryMentor;
