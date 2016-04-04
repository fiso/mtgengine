"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BladedPinions extends Card {
  constructor(game) {
    super(game, "Bladed Pinions", "Scars of Mirrodin", "SOM");
  }
}

module.exports = BladedPinions;
