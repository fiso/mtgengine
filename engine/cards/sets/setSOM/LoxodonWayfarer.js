"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoxodonWayfarer extends Card {
  constructor(game) {
    super(game, "Loxodon Wayfarer", "Scars of Mirrodin", "SOM");
  }
}

module.exports = LoxodonWayfarer;
