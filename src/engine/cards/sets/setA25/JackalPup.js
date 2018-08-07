"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JackalPup extends UnimplementedCard {
  constructor (game) {
    super(game, "Jackal Pup", "Masters 25", "A25");
  }
}

module.exports = JackalPup;
