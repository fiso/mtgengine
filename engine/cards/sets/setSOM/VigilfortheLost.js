"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VigilfortheLost extends Card {
  constructor(game) {
    super(game, "Vigil for the Lost", "Scars of Mirrodin", "SOM");
  }
}

module.exports = VigilfortheLost;
