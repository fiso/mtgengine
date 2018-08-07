"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Nightmare extends UnimplementedCard {
  constructor (game) {
    super(game, "Nightmare", "Welcome Deck 2017", "W17");
  }
}

module.exports = Nightmare;
