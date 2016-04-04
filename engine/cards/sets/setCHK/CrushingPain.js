"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrushingPain extends Card {
  constructor(game) {
    super(game, "Crushing Pain", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CrushingPain;
