"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Soliton extends Card {
  constructor(game) {
    super(game, "Soliton", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Soliton;
