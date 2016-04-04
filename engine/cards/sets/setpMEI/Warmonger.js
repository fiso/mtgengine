"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Warmonger extends Card {
  constructor(game) {
    super(game, "Warmonger", "Media Inserts", "pMEI");
  }
}

module.exports = Warmonger;
