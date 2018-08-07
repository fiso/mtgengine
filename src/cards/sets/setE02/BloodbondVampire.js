"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodbondVampire extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodbond Vampire", "Explorers of Ixalan", "E02");
  }
}

module.exports = BloodbondVampire;
