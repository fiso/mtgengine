"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JackalPup extends UnimplementedCard {
  constructor(game) {
    super(game, "Jackal Pup", "Friday Night Magic", "pFNM");
  }
}

module.exports = JackalPup;
