"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Invigorate extends UnimplementedCard {
  constructor (game) {
    super(game, "Invigorate", "Masters 25", "A25");
  }
}

module.exports = Invigorate;
