"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlanarBirth extends Card {
  constructor(game) {
    super(game, "Planar Birth", "Urza's Saga", "USG");
  }
}

module.exports = PlanarBirth;
