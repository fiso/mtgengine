"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoonbowIllusionist extends Card {
  constructor(game) {
    super(game, "Moonbow Illusionist", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MoonbowIllusionist;
