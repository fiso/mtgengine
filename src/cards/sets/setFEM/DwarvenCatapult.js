"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenCatapult extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Catapult", "Fallen Empires", "FEM");
  }
}

module.exports = DwarvenCatapult;
