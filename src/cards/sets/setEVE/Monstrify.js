"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Monstrify extends UnimplementedCard {
  constructor(game) {
    super(game, "Monstrify", "Eventide", "EVE");
  }
}

module.exports = Monstrify;
