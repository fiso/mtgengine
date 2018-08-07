"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kindle extends UnimplementedCard {
  constructor (game) {
    super(game, "Kindle", "Masters 25", "A25");
  }
}

module.exports = Kindle;
