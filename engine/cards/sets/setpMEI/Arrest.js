"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Arrest extends Card {
  constructor(game) {
    super(game, "Arrest", "Media Inserts", "pMEI");
  }
}

module.exports = Arrest;
