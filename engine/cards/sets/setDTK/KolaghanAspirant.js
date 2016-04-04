"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KolaghanAspirant extends Card {
  constructor(game) {
    super(game, "Kolaghan Aspirant", "Dragons of Tarkir", "DTK");
  }
}

module.exports = KolaghanAspirant;
