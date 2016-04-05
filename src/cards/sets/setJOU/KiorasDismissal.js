"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KiorasDismissal extends UnimplementedCard {
  constructor(game) {
    super(game, "Kiora's Dismissal", "Journey into Nyx", "JOU");
  }
}

module.exports = KiorasDismissal;
