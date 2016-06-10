"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinTutor extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Tutor", "Unglued", "UGL");
  }
}

module.exports = GoblinTutor;
