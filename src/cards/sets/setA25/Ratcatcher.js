"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ratcatcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Ratcatcher", "Masters 25", "A25");
  }
}

module.exports = Ratcatcher;
