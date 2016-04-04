"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VileBile extends Card {
  constructor(game) {
    super(game, "Vile Bile", "Unhinged", "UNH");
  }
}

module.exports = VileBile;
