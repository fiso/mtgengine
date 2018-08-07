"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurningFistMinotaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Burning-Fist Minotaur", "Hour of Devastation", "HOU");
  }
}

module.exports = BurningFistMinotaur;
