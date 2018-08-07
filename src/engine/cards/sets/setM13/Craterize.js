"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Craterize extends UnimplementedCard {
  constructor (game) {
    super(game, "Craterize", "Magic 2013", "M13");
  }
}

module.exports = Craterize;
