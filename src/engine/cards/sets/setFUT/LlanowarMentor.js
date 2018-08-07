"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LlanowarMentor extends UnimplementedCard {
  constructor (game) {
    super(game, "Llanowar Mentor", "Future Sight", "FUT");
  }
}

module.exports = LlanowarMentor;
