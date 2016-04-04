"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NaturalState extends Card {
  constructor(game) {
    super(game, "Natural State", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = NaturalState;
