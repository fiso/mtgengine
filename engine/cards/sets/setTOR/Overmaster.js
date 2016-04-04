"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Overmaster extends Card {
  constructor(game) {
    super(game, "Overmaster", "Torment", "TOR");
  }
}

module.exports = Overmaster;
