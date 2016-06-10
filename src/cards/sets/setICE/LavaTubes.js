"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LavaTubes extends UnimplementedCard {
  constructor (game) {
    super(game, "Lava Tubes", "Ice Age", "ICE");
  }
}

module.exports = LavaTubes;
