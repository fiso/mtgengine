"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TourachsChant extends Card {
  constructor(game) {
    super(game, "Tourach's Chant", "Fallen Empires", "FEM");
  }
}

module.exports = TourachsChant;
