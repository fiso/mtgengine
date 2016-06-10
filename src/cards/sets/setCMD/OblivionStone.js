"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OblivionStone extends UnimplementedCard {
  constructor (game) {
    super(game, "Oblivion Stone", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = OblivionStone;
