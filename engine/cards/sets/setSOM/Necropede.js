"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Necropede extends Card {
  constructor(game) {
    super(game, "Necropede", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Necropede;
