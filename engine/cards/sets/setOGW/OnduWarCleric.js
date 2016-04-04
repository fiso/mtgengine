"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OnduWarCleric extends Card {
  constructor(game) {
    super(game, "Ondu War Cleric", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = OnduWarCleric;
