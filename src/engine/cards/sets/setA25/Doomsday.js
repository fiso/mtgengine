"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Doomsday extends UnimplementedCard {
  constructor (game) {
    super(game, "Doomsday", "Masters 25", "A25");
  }
}

module.exports = Doomsday;
