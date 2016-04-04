"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BleakCovenVampires extends Card {
  constructor(game) {
    super(game, "Bleak Coven Vampires", "Scars of Mirrodin", "SOM");
  }
}

module.exports = BleakCovenVampires;
