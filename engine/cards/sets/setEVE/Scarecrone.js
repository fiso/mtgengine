"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Scarecrone extends Card {
  constructor(game) {
    super(game, "Scarecrone", "Eventide", "EVE");
  }
}

module.exports = Scarecrone;
