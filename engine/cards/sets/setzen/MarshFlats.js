"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarshFlats extends Card {
  constructor(game) {
    super(game, "Marsh Flats", "Zendikar", "ZEN");
  }
}

module.exports = MarshFlats;
