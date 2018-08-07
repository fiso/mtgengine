"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TailSlash extends UnimplementedCard {
  constructor (game) {
    super(game, "Tail Slash", "Dragons of Tarkir", "DTK");
  }
}

module.exports = TailSlash;
