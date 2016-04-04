"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarrionRats extends Card {
  constructor(game) {
    super(game, "Carrion Rats", "Torment", "TOR");
  }
}

module.exports = CarrionRats;
