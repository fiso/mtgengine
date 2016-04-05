"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathbringerRegent extends UnimplementedCard {
  constructor(game) {
    super(game, "Deathbringer Regent", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DeathbringerRegent;
