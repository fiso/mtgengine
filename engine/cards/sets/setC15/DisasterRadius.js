"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DisasterRadius extends Card {
  constructor(game) {
    super(game, "Disaster Radius", "Commander 2015", "C15");
  }
}

module.exports = DisasterRadius;
