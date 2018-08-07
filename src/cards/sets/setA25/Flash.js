"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flash extends UnimplementedCard {
  constructor (game) {
    super(game, "Flash", "Masters 25", "A25");
  }
}

module.exports = Flash;
