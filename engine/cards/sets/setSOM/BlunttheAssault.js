"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlunttheAssault extends Card {
  constructor(game) {
    super(game, "Blunt the Assault", "Scars of Mirrodin", "SOM");
  }
}

module.exports = BlunttheAssault;
