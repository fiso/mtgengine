"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TarnishedCitadel extends Card {
  constructor(game) {
    super(game, "Tarnished Citadel", "Odyssey", "ODY");
  }
}

module.exports = TarnishedCitadel;
