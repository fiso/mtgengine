"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightfromWithin extends Card {
  constructor(game) {
    super(game, "Light from Within", "Eventide", "EVE");
  }
}

module.exports = LightfromWithin;
