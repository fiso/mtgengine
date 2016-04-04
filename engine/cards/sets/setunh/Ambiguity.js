"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ambiguity extends UnimplementedCard {
  constructor(game) {
    super(game, "Ambiguity", "Unhinged", "UNH");
  }
}

module.exports = Ambiguity;
