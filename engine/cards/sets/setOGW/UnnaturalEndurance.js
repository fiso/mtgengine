"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnnaturalEndurance extends Card {
  constructor(game) {
    super(game, "Unnatural Endurance", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = UnnaturalEndurance;
