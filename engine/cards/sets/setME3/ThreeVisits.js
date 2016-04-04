"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThreeVisits extends Card {
  constructor(game) {
    super(game, "Three Visits", "Masters Edition III", "ME3");
  }
}

module.exports = ThreeVisits;
