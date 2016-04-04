"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Seasinger extends Card {
  constructor(game) {
    super(game, "Seasinger", "Fallen Empires", "FEM");
  }
}

module.exports = Seasinger;
