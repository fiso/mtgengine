"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImmobilizerEldrazi extends Card {
  constructor(game) {
    super(game, "Immobilizer Eldrazi", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ImmobilizerEldrazi;
