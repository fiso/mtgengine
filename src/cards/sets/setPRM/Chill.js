"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Chill extends UnimplementedCard {
  constructor (game) {
    super(game, "Chill", "Magic Online Promos", "PRM");
  }
}

module.exports = Chill;
