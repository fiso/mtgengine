"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CentaurVeteran extends Card {
  constructor(game) {
    super(game, "Centaur Veteran", "Torment", "TOR");
  }
}

module.exports = CentaurVeteran;
