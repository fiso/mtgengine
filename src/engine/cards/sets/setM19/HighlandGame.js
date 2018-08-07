"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HighlandGame extends UnimplementedCard {
  constructor (game) {
    super(game, "Highland Game", "Core Set 2019", "M19");
  }
}

module.exports = HighlandGame;
