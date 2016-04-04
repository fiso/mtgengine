"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AirborneAid extends Card {
  constructor(game) {
    super(game, "Airborne Aid", "Onslaught", "ONS");
  }
}

module.exports = AirborneAid;
