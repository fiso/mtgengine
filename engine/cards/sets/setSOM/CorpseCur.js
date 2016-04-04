"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CorpseCur extends Card {
  constructor(game) {
    super(game, "Corpse Cur", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CorpseCur;
