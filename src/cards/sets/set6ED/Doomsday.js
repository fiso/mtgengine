"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Doomsday extends UnimplementedCard {
  constructor (game) {
    super(game, "Doomsday", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Doomsday;
