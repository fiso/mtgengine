"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VeilofBirds extends Card {
  constructor(game) {
    super(game, "Veil of Birds", "Urza's Saga", "USG");
  }
}

module.exports = VeilofBirds;
