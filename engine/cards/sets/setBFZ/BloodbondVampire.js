"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodbondVampire extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodbond Vampire", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BloodbondVampire;
