"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LumberingFalls extends UnimplementedCard {
  constructor(game) {
    super(game, "Lumbering Falls", "Battle for Zendikar", "BFZ");
  }
}

module.exports = LumberingFalls;
