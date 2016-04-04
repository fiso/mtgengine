"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AssaultStrobe extends Card {
  constructor(game) {
    super(game, "Assault Strobe", "Scars of Mirrodin", "SOM");
  }
}

module.exports = AssaultStrobe;
