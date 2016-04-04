"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HollowSpecter extends Card {
  constructor(game) {
    super(game, "Hollow Specter", "Legions", "LGN");
  }
}

module.exports = HollowSpecter;
