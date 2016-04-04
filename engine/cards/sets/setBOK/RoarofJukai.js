"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoarofJukai extends Card {
  constructor(game) {
    super(game, "Roar of Jukai", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = RoarofJukai;
