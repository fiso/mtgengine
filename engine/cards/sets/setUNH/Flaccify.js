"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flaccify extends UnimplementedCard {
  constructor(game) {
    super(game, "Flaccify", "Unhinged", "UNH");
  }
}

module.exports = Flaccify;
