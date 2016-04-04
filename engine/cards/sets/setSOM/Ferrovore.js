"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ferrovore extends Card {
  constructor(game) {
    super(game, "Ferrovore", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Ferrovore;
