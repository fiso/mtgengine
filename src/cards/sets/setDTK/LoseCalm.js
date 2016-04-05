"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoseCalm extends UnimplementedCard {
  constructor(game) {
    super(game, "Lose Calm", "Dragons of Tarkir", "DTK");
  }
}

module.exports = LoseCalm;
