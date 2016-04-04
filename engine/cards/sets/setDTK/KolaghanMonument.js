"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KolaghanMonument extends Card {
  constructor(game) {
    super(game, "Kolaghan Monument", "Dragons of Tarkir", "DTK");
  }
}

module.exports = KolaghanMonument;
