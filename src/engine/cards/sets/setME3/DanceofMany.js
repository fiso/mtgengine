"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DanceofMany extends UnimplementedCard {
  constructor (game) {
    super(game, "Dance of Many", "Masters Edition III", "ME3");
  }
}

module.exports = DanceofMany;
