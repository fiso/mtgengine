"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Inspiration extends UnimplementedCard {
  constructor (game) {
    super(game, "Inspiration", "Welcome Deck 2017", "W17");
  }
}

module.exports = Inspiration;
