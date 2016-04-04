"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SolarBlast extends Card {
  constructor(game) {
    super(game, "Solar Blast", "Onslaught", "ONS");
  }
}

module.exports = SolarBlast;
