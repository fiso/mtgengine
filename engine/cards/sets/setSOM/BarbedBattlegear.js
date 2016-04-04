"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarbedBattlegear extends Card {
  constructor(game) {
    super(game, "Barbed Battlegear", "Scars of Mirrodin", "SOM");
  }
}

module.exports = BarbedBattlegear;
