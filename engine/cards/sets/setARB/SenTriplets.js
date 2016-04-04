"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SenTriplets extends Card {
  constructor(game) {
    super(game, "Sen Triplets", "Alara Reborn", "ARB");
  }
}

module.exports = SenTriplets;
